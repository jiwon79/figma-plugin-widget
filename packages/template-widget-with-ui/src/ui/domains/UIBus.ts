import { Bus, Message } from "@won-template-widget-with-ui/common";

export class UIBus extends Bus {
  private static _instance: UIBus;

  public static get instance(): UIBus {
    if (!this._instance) {
      this._instance = new UIBus();
    }
    return this._instance;
  }

  static send(message: Message) {
    parent.postMessage({ pluginMessage: message }, "*");
  }
}
