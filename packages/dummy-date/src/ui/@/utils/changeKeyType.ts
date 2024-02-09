export function changeKeyType(
  key: React.Key | undefined | null
): string | number | undefined {
  if (typeof key === "string") {
    return key;
  } else if (typeof key === "number") {
    return key;
  } else {
    return undefined;
  }
}
