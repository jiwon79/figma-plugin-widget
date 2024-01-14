import { Message } from "@common/interface/Message";
import { changeSelectionText } from "./actions/Create";

export class PluginNetwork {
  static onMessage(message: Message) {
    console.log("PLUGIN -", message);
    switch (message.type) {
      case "TEST": {
        console.log("TEST");
        break;
      }
      case "CHANGE_SELECTION_TEXT_TO_DATE": {
        changeSelectionText(message.payload);
      }
    }
  }

  static send(message: Message) {
    figma.ui.postMessage(message);
  }
}
