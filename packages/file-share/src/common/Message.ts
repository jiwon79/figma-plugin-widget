import { FileObject } from "./FileObject";

export interface BaseMessage {
  type: string;
  payload: any;
}

export type FileShareMessage =
  | {
      type: "SET_NUMBER";
      payload: { number: number };
    }
  | {
      type: "SAVE_FILE";
      payload: FileObject;
    }
  | { type: "NOTIFY_DOWNLOAD_FILE"; payload: void }
  | { type: "DOWNLOAD_FILE"; payload: FileObject };
