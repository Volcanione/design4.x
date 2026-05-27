export interface YostarDesignResolverOptions {
  importStyle?: boolean;
}

const componentMap: Record<string, string> = {
  YoButton: 'button',
  YoConfigProvider: 'config-provider',
  YoSpace: 'space',
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
