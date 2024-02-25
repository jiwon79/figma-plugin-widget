import { FileObject } from "@won-file-share/common";

export const downloadFile = (file: FileObject) => {
  const link = document.createElement("a");
  const { name, extension, content } = file;
  link.href = content;
  link.download = name + "." + extension;
  link.click();
};
