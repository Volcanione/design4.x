export interface YostarDesignResolverOptions {
  importStyle?: boolean;
}

const componentMap: Record<string, string> = {
  YoButton: 'button',
  YoCheckbox: 'checkbox',
  YoCheckboxGroup: 'checkbox',
  YoConfigProvider: 'config-provider',
  YoDatePicker: 'date-picker',
  YoInput: 'input',
  YoInputNumber: 'input-number',
  YoRadio: 'radio',
  YoRadioButton: 'radio',
  YoRadioGroup: 'radio',
  YoSelect: 'select',
  YoSelectOption: 'select',
  YoSpace: 'space',
  YoSwitch: 'switch',
  YoTimePicker: 'time-picker',
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
