import { TemplateWidgetWithUIMessage } from "@won-file-share/common";

export class UIBus {
  static on(event: MessageEvent<TemplateWidgetWithUIMessage>) {
    console.log("UI -", event);
  }

  static send(message: TemplateWidgetWithUIMessage) {
    parent.postMessage({ pluginMessage: message }, "*");
  }
}
