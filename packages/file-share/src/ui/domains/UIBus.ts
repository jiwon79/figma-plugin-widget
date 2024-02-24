import { FileShareMessage } from "@won-file-share/common";

export class UIBus {
  static listenrMap = new Map<FileShareMessage["type"], Function[]>();

  static on(message: FileShareMessage) {
    console.log("UI -", message);
    if (!UIBus.listenrMap.has(message.type)) return;

    const listeners = UIBus.listenrMap.get(message.type);
    listeners?.forEach((listener) => listener(message.payload));
  }

  static addListener<T extends FileShareMessage["type"]>(
    type: T,
    listener: (
      payload: Extract<FileShareMessage, { type: T }>["payload"]
    ) => void
  ) {
    if (!UIBus.listenrMap.has(type)) {
      UIBus.listenrMap.set(type, []);
    }
    UIBus.listenrMap.get(type)?.push(listener);
  }

  static removeListener(type: FileShareMessage["type"], listener: Function) {
    if (!UIBus.listenrMap.has(type)) return;
    const listeners = UIBus.listenrMap.get(type);
    const index = listeners?.indexOf(listener);

    if (index && index !== -1) {
      listeners?.splice(index, 1);
    }
  }

  static send(message: FileShareMessage) {
    parent.postMessage({ pluginMessage: message }, "*");
  }
}

window.onmessage = (event) => {
  const message = event.data.pluginMessage;
  if (!message) return;

  UIBus.on(message);
};
