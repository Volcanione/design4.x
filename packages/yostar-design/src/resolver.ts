export interface YostarDesignResolverOptions {
  importStyle?: boolean;
}

const componentMap: Record<string, string> = {
  YoAutoComplete: 'auto-complete',
  YoAutoCompleteOptGroup: 'auto-complete',
  YoAutoCompleteOption: 'auto-complete',
  YoButton: 'button',
  YoCascader: 'cascader',
  YoCheckbox: 'checkbox',
  YoCheckboxGroup: 'checkbox',
  YoConfigProvider: 'config-provider',
  YoDatePicker: 'date-picker',
  YoDateRangePicker: 'date-picker',
  YoInput: 'input',
  YoTextarea: 'input',
  YoInputNumber: 'input-number',
  YoRadio: 'radio',
  YoRadioButton: 'radio',
  YoRadioGroup: 'radio',
  YoSelect: 'select',
  YoSelectOption: 'select',
  YoSpace: 'space',
  YoSwitch: 'switch',
  YoTimePicker: 'time-picker',
  YoTimeRangePicker: 'time-picker',
  YoUpload: 'upload',
};

export function YostarDesignResolver(options: YostarDesignResolverOptions = {}) {
  const importStyle = options.importStyle ?? true;

  return (name: string) => {
    const path = componentMap[name];

    if (!path) {
      return;
    }

    return {
      name,
      from: `@yo-star/yostar-design/${path}`,
      sideEffects: importStyle ? `@yo-star/yostar-design/${path}/style.css` : undefined,
    };
  };
}
