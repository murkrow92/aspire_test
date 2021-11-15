import { Platform } from "react-native";

export function isAndroid() {
  return Platform.OS === "android";
}

export function isIOs() {
  return Platform.OS === "ios";
}

export function getPlatformOS() {
  return Platform.OS;
}
