import { TemplateWidgetWithUIMessage } from "@won-template-witdget-with-ui/common";

export class UIBus {
  static on(event: MessageEvent<TemplateWidgetWithUIMessage>) {
    console.log("UI -", event);
  }

  static send(message: TemplateWidgetWithUIMessage) {
    parent.postMessage({ pluginMessage: message }, "*");
  }
}
