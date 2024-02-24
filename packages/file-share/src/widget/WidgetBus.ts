import "@won-types";
import { FileShareMessage } from "@won-file-share/common";

export class WidgetBus {
  static listenrMap = new Map<FileShareMessage["type"], Function[]>();

  static on(message: FileShareMessage) {
    console.log("PLUGIN -", message);
    if (!WidgetBus.listenrMap.has(message.type)) return;

    const listeners = WidgetBus.listenrMap.get(message.type);
    listeners?.forEach((listener) => listener(message.payload));
  }

  static addListener<T extends FileShareMessage["type"]>(
    type: T,
    listener: (
      payload: Extract<FileShareMessage, { type: T }>["payload"]
    ) => void
  ) {
    if (!WidgetBus.listenrMap.has(type)) {
      WidgetBus.listenrMap.set(type, []);
    }
    WidgetBus.listenrMap.get(type)?.push(listener);
  }

  static removeListener(type: FileShareMessage["type"], listener: Function) {
    if (!WidgetBus.listenrMap.has(type)) return;
    const listeners = WidgetBus.listenrMap.get(type);
    const index = listeners?.indexOf(listener);

    if (index && index !== -1) {
      listeners?.splice(index, 1);
    }
  }

  static send(message: FileShareMessage) {
    figma.ui.postMessage(message);
  }
}

figma.ui.onmessage = WidgetBus.on;
