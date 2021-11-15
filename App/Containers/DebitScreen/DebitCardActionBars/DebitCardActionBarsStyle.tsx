import React from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const DebitCardActionBarsStyle = (OriginalComponent: any) => (
  props: any,
) => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
  });

  return <OriginalComponent {...props} styles={styles} />;
};
