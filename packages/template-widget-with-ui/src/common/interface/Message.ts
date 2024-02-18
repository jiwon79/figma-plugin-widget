export interface BaseMessage {
  type: string;
  payload: any;
}

export type Message = {
  type: "SET_NUMBER";
  payload: { number: number };
};

export type MessageType = Message["type"];
