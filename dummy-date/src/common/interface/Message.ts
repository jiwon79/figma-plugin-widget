export interface BaseMessage {
  type: string;
  payload: any;
}

export type Message =
  | {
      type: "CHANGE_SELECTION_TEXT_TO_DATE";
      payload: ChangeSelectionTextPayload;
    }
  | { type: "TEST" };

export interface ChangeSelectionTextPayload {
  startDate: string;
  format: string;
  gap: number;
}
