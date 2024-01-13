import { NetworkSide } from "@common/network/sides";
import { test } from "@plugin/test";
// import {
//   ChangeSelectionTextPayload,
//   changeSelectionText,
// } from "@plugin/actions/changeSelectionText";
import * as Networker from "monorepo-networker";

export class ChangeSelectionTextMessage extends Networker.MessageType<ChangeSelectionTextPayload> {
  public receivingSide(): Networker.Side {
    return NetworkSide.PLUGIN;
  }

  public handle(
    payload: ChangeSelectionTextPayload,
    from: Networker.Side
  ): void {
    console.log("ChangeSelectionTextMessage", payload);
    if (figma.editorType === "figma") {
      changeSelectionText(payload);
    }
  }
}

export interface ChangeSelectionTextPayload {
  startDate: string;
  format: string;
  type: ChangeDateType;
}

export type ChangeDateType =
  | {
      type: "random";
    }
  | {
      type: "auto-increment";
      gap: number;
    };

export async function changeSelectionText(payload: ChangeSelectionTextPayload) {
  const { startDate, format, type } = payload;

  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify("No text selected");
    return;
  }
  console.log(startDate, format, type);

  const date = new Date(startDate);

  selection.forEach(async (node) => {
    console.log(date);
    if (node.type === "TEXT") {
      await figma.loadFontAsync(node.fontName as FontName);
      node.characters = formatDate(date, format);
      date.setDate(date.getDate() + 1);
    }
  });
}

function formatDate(date: Date, format: string) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return format
    .replace("DD", pad(day))
    .replace("MM", pad(month))
    .replace("YYYY", pad(year));
}

function pad(num: number) {
  return num.toString().padStart(2, "0");
}
