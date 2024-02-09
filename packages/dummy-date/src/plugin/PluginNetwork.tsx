import "@won-types";
import { Message } from "@won-dummy-date/common/interface";
import { openLink, changeSelectionText } from "./actions";

export class PluginNetwork {
  static onMessage(message: Message) {
    console.log("PLUGIN -", message);
    switch (message.type) {
      case "CHANGE_SELECTION_TEXT_TO_DATE": {
        changeSelectionText(message.payload);
        break;
      }
      case "OPEN_LINK": {
        openLink(message.payload.url);
      }
    }
  }

  static send(message: Message) {
    figma.ui.postMessage(message);
  }
}
