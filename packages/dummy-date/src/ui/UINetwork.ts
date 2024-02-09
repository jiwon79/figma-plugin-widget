import { Message } from "@won-dummy-date-common/interface";

export class UINetwork {
  static onMessage(event: MessageEvent<Message>) {
    console.log("UI -", event);
  }

  static send(message: Message) {
    parent.postMessage({ pluginMessage: message }, "*");
  }
}
