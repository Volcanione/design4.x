import type { App, Component, Plugin } from 'vue';

export type WithInstall<T> = T & Plugin;

export function withInstall<T extends Component>(component: T) {
  (component as WithInstall<T>).install = (app: App) => {
    const name = component.name;
    if (name) {
      app.component(name, component);
    }
    return app;
  };

  return component as WithInstall<T>;
}
