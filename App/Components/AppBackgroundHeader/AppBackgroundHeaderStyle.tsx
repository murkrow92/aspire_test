import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const AppBackgroundHeaderStyle = (OriginalComponent: any) => (
  props: any,
): ReactElement => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      backgroundColor: Colors.primaryText,
      paddingHorizontal: 20 * WIDTH_RATIO,
      // @ts-ignore
      paddingTop: 20 * WIDTH_RATIO + STATUS_BAR_HEIGHT,
      height: deviceHeight,
    },
    backButton: {
      paddingVertical: 10 * WIDTH_RATIO,
      paddingRight: 10 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
