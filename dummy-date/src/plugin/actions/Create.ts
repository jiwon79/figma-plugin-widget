import { ChangeSelectionTextPayload } from "@common/interface/Message";

const freeFormat = ["yyyy-mm-dd", "dd-mm-yyyy", "mm-dd", "dd"];

export async function changeSelectionText(payload: ChangeSelectionTextPayload) {
  const { startDate, format, gap } = payload;
  if (!(await checkAccess(format))) {
    return;
  }

  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify("Select at least one text layer");
    return;
  }
  const date = new Date(startDate);

  for (const node of selection) {
    if (node.type === "TEXT") {
      await figma.loadFontAsync(node.fontName as FontName);
      node.characters = formatDate(date, format);
      date.setDate(date.getDate() + gap);
    }
  }
}

async function checkAccess(format: string) {
  if (freeFormat.includes(format)) {
    return true;
  }

  if (!figma.payments) {
    figma.notify("Some features are provided for a fee.");
    return false;
  }

  if (figma.payments.status.type === "PAID") {
    return true;
  }

  await figma.payments.initiateCheckoutAsync();
  return false;
}

function formatDate(date: Date, format: string) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const smallYear = year % 100;

  return format
    .replace("yyyy", pad(year))
    .replace("yy", pad(smallYear))
    .replace("dd", pad(day))
    .replace("mm", pad(month));
}

function pad(num: number) {
  return num.toString().padStart(2, "0");
}
