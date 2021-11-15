import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors, Metrics } from "Themes";

export const DebitScreenStyle = (OriginalComponent: any) => (
  props: any,
): ReactElement => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    main: {
      marginTop: 300 * WIDTH_RATIO,
      paddingHorizontal: 20 * WIDTH_RATIO,
      borderTopLeftRadius: 24 * WIDTH_RATIO,
      borderTopRightRadius: 24 * WIDTH_RATIO,
      paddingTop: Metrics.debitCard.height,
      backgroundColor: Colors.white,
      minHeight: deviceHeight - 300 * WIDTH_RATIO,
    },
    debitCard: {
      position: "absolute",
      top: -90 * WIDTH_RATIO,
      right: 20 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
