import React from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const IconActionBarStyle = (OriginalComponent: any) => (props: any) => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      ...ApplicationStyles.utils.centerRow,
      zIndex: 10,
    },
    iconContainer: {
      backgroundColor: Colors.iconBackground,
      width: 48 * WIDTH_RATIO,
      height: 48 * WIDTH_RATIO,
      borderRadius: 24 * WIDTH_RATIO,
      ...ApplicationStyles.utils.middle,
    },
    textContainer: {
      flex: 1,
      paddingLeft: 12 * WIDTH_RATIO,
    },
    title: {
      ...ApplicationStyles.text.h8White,
      fontWeight: "500",
      color: Colors.primaryText,
    },
    description: {
      ...ApplicationStyles.text.h9White,
      color: Colors.descriptionText,
    },
    switchContainer: {
      zIndex: 999,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
