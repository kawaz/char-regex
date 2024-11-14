import { expect } from "bun:test";
import charRegex from "../dist";

expect("❤️👊🏽".match(/./g)?.length).toEqual(6);
expect("❤️👊🏽".match(charRegex())?.length).toEqual(2);
expect("❤️👊🏽".match(charRegex())).toEqual([
  "❤️",
  "👊🏽",
]);

expect("🧑‍🤝‍🧑👭👫👬".match(/./g)?.length).toEqual(14);
expect("🧑‍🤝‍🧑👭👫👬".match(charRegex())?.length).toEqual(4);
expect("🧑‍🤝‍🧑👭👫👬".match(charRegex())).toEqual([
  "🧑‍🤝‍🧑",
  "👭",
  "👫",
  "👬",
]);

expect("👨‍👩‍👧‍👦".match(/./g)?.length).toEqual(11);
expect("👨‍👩‍👧‍👦".match(charRegex())?.length).toEqual(1);
expect("👨‍👩‍👧‍👦".match(charRegex())).toEqual([
  "👨‍👩‍👧‍👦",
]);


// ブラウンマッシュルーム
expect("🍄+🟫=🍄‍🟫".match(/./g)?.length).toEqual(11);
expect("🍄+🟫=🍄‍🟫".match(charRegex())?.length).toEqual(5);
expect("🍄+🟫=🍄‍🟫".match(charRegex())).toEqual([
  "🍄",
  "+",
  "🟫",
  "=",
  "🍄‍🟫",
]);

// フェニックス
expect("🐦+🔥=🐦‍🔥".match(/./g)?.length).toEqual(11);
expect("🐦+🔥=🐦‍🔥".match(charRegex())?.length).toEqual(5);
expect("🐦+🔥=🐦‍🔥".match(charRegex())).toEqual([
  "🐦",
  "+",
  "🔥",
  "=",
  "🐦‍🔥",
]);

// 電動車いすに乗る男性（6色）
expect("👨‍🦼‍➡️👨🏻‍🦼‍➡️👨🏼‍🦼‍➡️👨🏽‍🦼‍➡️👨🏾‍🦼‍➡️👨🏿‍🦼‍➡️".match(/./g)?.length).toEqual(58);
expect("👨‍🦼‍➡️👨🏻‍🦼‍➡️👨🏼‍🦼‍➡️👨🏽‍🦼‍➡️👨🏾‍🦼‍➡️👨🏿‍🦼‍➡️".match(charRegex())?.length).toEqual(6);
expect("👨‍🦼‍➡️👨🏻‍🦼‍➡️👨🏼‍🦼‍➡️👨🏽‍🦼‍➡️👨🏾‍🦼‍➡️👨🏿‍🦼‍➡️".match(charRegex())).toEqual([
  "👨‍🦼‍➡️",
  "👨🏻‍🦼‍➡️",
  "👨🏼‍🦼‍➡️",
  "👨🏽‍🦼‍➡️",
  "👨🏾‍🦼‍➡️",
  "👨🏿‍🦼‍➡️",
]);
