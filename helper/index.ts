export function humanReadableDateHandler(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function replaceStr(str: string) {
  return str.replace(", ", "\n");
}
