import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const SpendingLimitScreenStyle = (OriginalComponent: any) => (
  props: any,
): ReactElement => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    main: {
      marginTop: 180 * WIDTH_RATIO,
      paddingHorizontal: 20 * WIDTH_RATIO,
      paddingTop: 30 * WIDTH_RATIO,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 24 * WIDTH_RATIO,
      borderTopRightRadius: 24 * WIDTH_RATIO,
      minHeight: deviceHeight - 180 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
