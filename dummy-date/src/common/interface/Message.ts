export interface BaseMessage {
  type: string;
  payload: any;
}

export type Message =
  | {
      type: "CHANGE_SELECTION_TEXT_TO_DATE";
      payload: ChangeSelectionTextPayload;
    }
  | { type: "OPEN_LINK"; payload: { url: string } };

export interface ChangeSelectionTextPayload {
  startDate: string;
  format: string;
  gap: number;
}
