import { FileObject } from "./FileObject";

export interface BaseMessage {
  type: string;
  payload: any;
}

export type FileShareMessage =
  | {
      type: "SAVE_FILE";
      payload: FileObject;
    }
  | { type: "NOTIFY_DOWNLOAD_FILE"; payload: void }
  | { type: "DOWNLOAD_FILE"; payload: FileObject }
  | { type: "DELETE_FILE"; payload: void }
  | { type: "CHANGE_FILE_NAME"; payload: string }
  | { type: "OPEN_TOAST"; payload: string };
