import { charRegexString } from "./macro" with { type: "macro" };
const r = new RegExp(charRegexString(), "g");
export const charRegex = () => r;
export default charRegex;
