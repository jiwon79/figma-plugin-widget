import "@won-types";
import { Message } from "@won-template-widget-with-ui/common";

export class WidgetBus {
  static listenrMap = new Map<Message["type"], Function[]>();

  static on(message: Message) {
    if (!WidgetBus.listenrMap.has(message.type)) return;

    const listeners = WidgetBus.listenrMap.get(message.type);
    listeners?.forEach((listener) => listener(message.payload));
  }

  static addListener<T extends Message["type"]>(
    type: T,
    listener: (payload: Extract<Message, { type: T }>["payload"]) => void
  ) {
    if (!WidgetBus.listenrMap.has(type)) {
      WidgetBus.listenrMap.set(type, []);
    }
    WidgetBus.listenrMap.get(type)?.push(listener);
  }

  static removeListener(type: Message["type"], listener: Function) {
    if (!WidgetBus.listenrMap.has(type)) return;
    const listeners = WidgetBus.listenrMap.get(type);
    const index = listeners?.indexOf(listener);

    if (index && index !== -1) {
      listeners?.splice(index, 1);
    }
  }

  static send(message: Message) {
    figma.ui.postMessage(message);
  }
}

figma.ui.onmessage = WidgetBus.on;
