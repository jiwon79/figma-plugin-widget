import { Message } from "@common/interface/Message";

export class PluginNetwork {
  static onMessage(message: Message) {
    console.log("PLUGIN -", message);
  }

  static send(message: Message) {
    figma.ui.postMessage(message);
  }
}
