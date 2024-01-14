export interface BaseMessage {
  type: string;
  payload: any;
}

export type Message =
  | {
      type: "CHANGE_SELECTION_TEXT_TO_DATE";
      payload: {
        startDate: string;
        format: string;
        method: "random" | "auto-increment";
        gap?: number;
      };
    }
  | { type: "TEST" };
