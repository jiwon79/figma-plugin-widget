import { Message, MessageType } from "./interface";

export abstract class Bus {
  private listeners: Map<Message["type"], Function[]> = new Map();

  public on(message: MessageEvent<Message>) {
    const messageType = message.data.type;
    const payload = message.data.payload;

    if (!this.listeners.has(messageType)) {
      return;
    }

    const listeners = this.listeners.get(messageType);
    listeners?.forEach((listener) => listener(payload));
  }

  public send(message: Message) {}

  public addListener<T extends MessageType>(
    type: T,
    listener: (payload: any) => void
  ) {
    if (!this.listeners.get(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type)?.push(listener);
  }

  public removeListener<T extends MessageType>(
    type: T,
    listener: (payload: Extract<Message, { type: T }>["payload"]) => void
  ) {
    if (!this.listeners.get(type)) {
      return;
    }
    const listeners = this.listeners.get(type);
    const index = listeners?.indexOf(listener);
    if (index && index !== -1) {
      listeners?.splice(index, 1);
    }
  }
}
