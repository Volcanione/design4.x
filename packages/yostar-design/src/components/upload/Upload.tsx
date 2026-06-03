import { Upload as AUpload } from 'ant-design-vue';
import { ReloadOutlined, RetweetOutlined } from '@ant-design/icons-vue';
import uploadRequest from 'ant-design-vue/es/vc-upload/request';
import {
  computed,
  defineComponent,
  h,
  isVNode,
  ref,
  watchEffect,
  type CSSProperties,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from 'vue';
import type {
  UploadChangeParam,
  UploadFile,
  UploadProps as AntUploadProps,
} from 'ant-design-vue/es/upload';
import { omitProps } from '../../_utils/props';
import { withInstall, type WithInstall } from '../../_utils/with-install';
import { useYoConfigProvider } from '../config-provider/context';
import './style/index.less';

export type YoUploadSizeValue = string | number;

export const yoUploadCustomProps = () => ({
  width: {
    type: [String, Number] as PropType<YoUploadSizeValue>,
    default: 80,
  },
  height: {
    type: [String, Number] as PropType<YoUploadSizeValue>,
    default: 80,
  },
  description: String,
  showReplace: {
    type: Boolean,
    default: true,
  },
  showRetry: {
    type: Boolean,
    default: true,
  },
});
const yoUploadCustomPropKeys = Object.keys(yoUploadCustomProps());

export const yoUploadProps = () => ({
  ...yoUploadCustomProps(),
});

export type YoUploadProps = AntUploadProps & Partial<ExtractPropTypes<ReturnType<typeof yoUploadCustomProps>>>;
export type YoUploadComponent = DefineComponent<YoUploadProps>;

function toCssSize(value: YoUploadSizeValue) {
  return typeof value === 'number' ? `${value}px` : value;
}

function toNodeArray(children: unknown): any[] {
  if (Array.isArray(children)) {
    return children;
  }
  return children === undefined || children === null ? [] : [children];
}

const Upload = defineComponent({
  name: 'YoUpload',
  inheritAttrs: false,
  props: yoUploadProps(),
  setup(props, { attrs, slots }) {
    const yoConfigProvider = useYoConfigProvider();

    const themeClass = computed(() => `yo-upload--${yoConfigProvider.value.themeMode}`);
    const forwardedProps = computed(() => omitProps(props, yoUploadCustomPropKeys));
    const hiddenFileInputRef = ref<HTMLInputElement>();
    const pendingFileRef = ref<UploadFile>();
    const latestFileList = ref<UploadFile[]>([]);

    const uploadStyle = computed<CSSProperties>(
      () =>
        ({
          '--yo-upload-width': toCssSize(props.width),
          '--yo-upload-height': toCssSize(props.height),
        }) as CSSProperties,
    );

    watchEffect(() => {
      const controlledFileList = attrs.fileList;
      const defaultFileList = attrs.defaultFileList;

      if (Array.isArray(controlledFileList)) {
        latestFileList.value = controlledFileList as UploadFile[];
        return;
      }

      if (!latestFileList.value.length && Array.isArray(defaultFileList)) {
        latestFileList.value = defaultFileList as UploadFile[];
      }
    });

    const emitFileListChange = (file: UploadFile, fileList: UploadFile[], event?: UploadChangeParam['event']) => {
      latestFileList.value = fileList;
      (attrs['onUpdate:fileList'] as ((fileList: UploadFile[]) => void) | undefined)?.(fileList);
      (attrs.onChange as ((info: UploadChangeParam<UploadFile>) => void) | undefined)?.({
        file,
        fileList,
        ...(event ? { event } : {}),
      });
    };

    const patchFileList = (file: UploadFile, event?: UploadChangeParam['event']) => {
      const nextFileList = [...latestFileList.value];
      const index = nextFileList.findIndex(item => item.uid === file.uid);

      if (index >= 0) {
        nextFileList[index] = file;
      } else {
        nextFileList.push(file);
      }

      emitFileListChange(file, nextFileList, event);
    };

    const resolveMaybe = async <T,>(value: T | PromiseLike<T>) => value;

    const getAction = async (file: File) => {
      const action = attrs.action as AntUploadProps['action'];

      if (typeof action === 'function') {
        return resolveMaybe(action(file as Parameters<NonNullable<Extract<AntUploadProps['action'], Function>>>[0]));
      }

      return action ?? '';
    };

    const getData = async (file: UploadFile) => {
      const data = attrs.data as AntUploadProps['data'];

      if (typeof data === 'function') {
        return resolveMaybe(data(file));
      }

      return data ?? {};
    };

    const createObjectUrl = (file: File) => {
      if (typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
        return undefined;
      }

      return URL.createObjectURL(file);
    };

    const createUploadFile = (file: File, targetFile: UploadFile, status: UploadFile['status']) => {
      const uid = targetFile.uid ?? `${Date.now()}`;
      Object.assign(file, { uid });

      return {
        uid,
        name: file.name,
        size: file.size,
        type: file.type,
        status,
        percent: status === 'uploading' ? 0 : 100,
        originFileObj: file,
        thumbUrl: createObjectUrl(file),
      } as UploadFile;
    };

    const finishUploadFile = (
      uploadFile: UploadFile,
      status: Extract<UploadFile['status'], 'done' | 'error'>,
      response?: unknown,
      error?: Error,
    ) => {
      patchFileList({
        ...uploadFile,
        status,
        percent: status === 'done' ? 100 : uploadFile.percent,
        response,
        error,
      });
    };

    const uploadReplacementFile = async (selectedFile: File, targetFile: UploadFile) => {
      const beforeUpload = attrs.beforeUpload as AntUploadProps['beforeUpload'];
      let parsedFile: File | Blob | string = selectedFile;

      if (beforeUpload) {
        const beforeResult = await beforeUpload(selectedFile as Parameters<NonNullable<AntUploadProps['beforeUpload']>>[0], [
          selectedFile as Parameters<NonNullable<AntUploadProps['beforeUpload']>>[0],
        ]);

        if (beforeResult === false) {
          patchFileList(createUploadFile(selectedFile, targetFile, 'done'));
          return;
        }

        if (typeof beforeResult === 'object' && beforeResult) {
          parsedFile = beforeResult as File | Blob;
        }
      }

      const uploadFile = createUploadFile(selectedFile, targetFile, 'uploading');
      patchFileList(uploadFile);

      const customRequest = attrs.customRequest as AntUploadProps['customRequest'];

      if (!customRequest && !attrs.action) {
        finishUploadFile(uploadFile, 'done');
        return;
      }

      const action = await getAction(selectedFile);
      const data = await getData(uploadFile);
      const requestFile = parsedFile instanceof Blob ? parsedFile : selectedFile;
      const request = customRequest ?? uploadRequest;

      request({
        action,
        data,
        filename: (attrs.name as string | undefined) ?? 'file',
        file: requestFile as Parameters<NonNullable<AntUploadProps['customRequest']>>[0]['file'],
        headers: (attrs.headers as Record<string, string>) ?? {},
        method: (attrs.method as Parameters<NonNullable<AntUploadProps['customRequest']>>[0]['method']) ?? 'post',
        withCredentials: Boolean(attrs.withCredentials),
        onProgress: event => {
          patchFileList({
            ...uploadFile,
            status: 'uploading',
            percent: event.percent ?? 0,
          }, { percent: event.percent ?? 0 });
        },
        onSuccess: response => finishUploadFile(uploadFile, 'done', response),
        onError: (error, response) =>
          finishUploadFile(uploadFile, 'error', response, error instanceof Error ? error : new Error('upload error')),
      });
    };

    const openReplaceDialog = (file: UploadFile) => {
      pendingFileRef.value = file;
      if (hiddenFileInputRef.value) {
        hiddenFileInputRef.value.value = '';
        hiddenFileInputRef.value.click();
      }
    };

    const retryUpload = (file: UploadFile) => {
      const originFile = file.originFileObj;

      if (originFile instanceof File) {
        void uploadReplacementFile(originFile, file);
        return;
      }

      openReplaceDialog(file);
    };

    const onHiddenFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const selectedFile = input.files?.[0];
      const targetFile = pendingFileRef.value;

      if (!selectedFile || !targetFile) {
        return;
      }

      void uploadReplacementFile(selectedFile, targetFile);
    };

    const createActionButton = (file: UploadFile, type: 'replace' | 'retry') => {
      const isReplace = type === 'replace';

      return h(
        'button',
        {
          type: 'button',
          class: ['ant-btn', 'ant-btn-text', 'ant-btn-sm', 'ant-upload-list-item-action', 'yo-upload__action-button'],
          title: isReplace ? '替换' : '重传',
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            if (isReplace) {
              openReplaceDialog(file);
            } else {
              retryUpload(file);
            }
          },
        },
        [h(isReplace ? RetweetOutlined : ReloadOutlined)],
      );
    };

    const isActionNode = (node: VNode) => {
      const className = node.props?.class;
      const classText = Array.isArray(className) ? className.join(' ') : String(className ?? '');

      return classText.includes('ant-upload-list-item-actions');
    };

    const isPreviewActionNode = (node: unknown) => isVNode(node) && node.type === 'a';

    const enhanceOriginNode = (node: unknown, file: UploadFile): any => {
      if (Array.isArray(node)) {
        const nextChildren = node.map(item => enhanceOriginNode(item, file));
        return nextChildren.some((child, index) => child !== node[index]) ? nextChildren : node;
      }

      if (!isVNode(node)) {
        return node;
      }

      const children = node.children;

      if (isActionNode(node)) {
        const isUploading = file.status === 'uploading';
        const actionChildren = toNodeArray(children).filter(child => {
          if (file.status === 'error' && isPreviewActionNode(child)) {
            return false;
          }

          return child !== null && child !== undefined;
        });

        if (!isUploading && props.showReplace) {
          actionChildren.push(createActionButton(file, 'replace'));
        }

        if (file.status === 'error' && props.showRetry) {
          actionChildren.push(createActionButton(file, 'retry'));
        }

        return h(node.type as string, node.props ?? {}, actionChildren);
      }

      if (Array.isArray(children)) {
        const nextChildren = children.map(child => enhanceOriginNode(child, file));

        if (!nextChildren.some((child, index) => child !== children[index])) {
          return node;
        }

        return h(node.type as Parameters<typeof h>[0], node.props ?? {}, nextChildren);
      }

      if (children && typeof children === 'object' && 'default' in children) {
        const slotChildren = children as Record<string, (...args: unknown[]) => unknown>;

        return h(node.type as Parameters<typeof h>[0], node.props ?? {}, {
          ...slotChildren,
          default: (...args: unknown[]) => enhanceOriginNode(slotChildren.default?.(...args), file),
        });
      }

      return node;
    };

    const handleUploadChange = (info: UploadChangeParam<UploadFile>) => {
      latestFileList.value = info.fileList;
      (attrs.onChange as ((info: UploadChangeParam<UploadFile>) => void) | undefined)?.(info);
    };

    const handleUpdateFileList = (fileList: UploadFile[]) => {
      latestFileList.value = fileList;
      (attrs['onUpdate:fileList'] as ((fileList: UploadFile[]) => void) | undefined)?.(fileList);
    };

    return () => {
      const {
        class: customClass,
        style: customStyle,
        itemRender,
        onChange,
        'onUpdate:fileList': onUpdateFileList,
        fileList,
        defaultFileList,
        ...restAttrs
      } = attrs;
      const { description: descriptionSlot, ...uploadSlots } = slots;
      const hasDescription = Boolean(props.description || descriptionSlot);
      const userItemRender = itemRender as AntUploadProps['itemRender'];
      const mergedFileList = Array.isArray(fileList) ? (fileList as UploadFile[]) : latestFileList.value;

      if (!Array.isArray(fileList) && !latestFileList.value.length && Array.isArray(defaultFileList)) {
        latestFileList.value = defaultFileList as UploadFile[];
      }

      const enhancedItemRender: AntUploadProps['itemRender'] = renderOptions => {
        const enhancedOriginNode = enhanceOriginNode(renderOptions.originNode, renderOptions.file);

        return userItemRender
          ? userItemRender({
              ...renderOptions,
              originNode: enhancedOriginNode,
            })
          : enhancedOriginNode;
      };

      return h(
        'span',
        {
          class: ['yo-upload', themeClass.value, customClass],
          style: [uploadStyle.value, customStyle as CSSProperties],
        },
        [
          <AUpload
            {...forwardedProps.value}
            {...restAttrs}
            accept={restAttrs.accept ?? 'image/*'}
            fileList={mergedFileList}
            listType={(restAttrs.listType as AntUploadProps['listType']) ?? 'picture-card'}
            class="yo-upload__control"
            itemRender={enhancedItemRender}
            onChange={handleUploadChange}
            onUpdate:fileList={handleUpdateFileList}
            v-slots={{
              ...uploadSlots,
              default: () => uploadSlots.default?.() ?? h('span', { class: 'yo-upload__trigger-plus' }, '+'),
            }}
          />,
          h('input', {
            ref: hiddenFileInputRef,
            type: 'file',
            accept: (restAttrs.accept as string | undefined) ?? 'image/*',
            class: 'yo-upload__hidden-input',
            onChange: onHiddenFileChange,
          }),
          hasDescription ? h('span', { class: 'yo-upload__description' }, descriptionSlot?.() ?? props.description) : null,
        ],
      );
    };
  },
});

export const YoUpload: WithInstall<typeof AUpload & YoUploadComponent> = withInstall(
  Upload as typeof AUpload & YoUploadComponent,
);

export type { UploadChangeParam as YoUploadChangeParam, UploadFile as YoUploadFile, UploadListProps as YoUploadListProps } from 'ant-design-vue/es/upload';

export default YoUpload;
