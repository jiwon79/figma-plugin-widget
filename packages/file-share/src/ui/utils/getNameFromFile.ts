export function getNameFromFile(file: File) {
  const lastDotIndex = file.name.lastIndexOf(".");
  const name =
    lastDotIndex !== -1 ? file.name.substring(0, lastDotIndex) : file.name;
  const extension =
    lastDotIndex !== -1
      ? file.name.substring(lastDotIndex + 1).toLowerCase()
      : "";

  return { name, extension };
}
