import charRegex from "char-regex";
export function charRegexString() {
  return charRegex().toString().replace(/^\//, "").replace(/\/\w*$/, "");
}
