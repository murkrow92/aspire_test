import React from "react";
import { StyleSheet } from "react-native";
import { deviceHeight, STATUS_BAR_HEIGHT, WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const DebitScreenHeaderStyle =
  (OriginalComponent: any) => (props: any) => {
    const styles = StyleSheet.create({
      ...ApplicationStyles.screen,
      ...ApplicationStyles.utils,
      ...ApplicationStyles.text,
      container: {
        backgroundColor: Colors.primaryText,
        paddingHorizontal: 20 * WIDTH_RATIO,
        // @ts-ignore
        paddingTop: 20 * WIDTH_RATIO + STATUS_BAR_HEIGHT,
        height: deviceHeight,
      },
      titleContainer: {},
      currencyContainer: {
        height: 24 * WIDTH_RATIO,
        paddingHorizontal: 12 * WIDTH_RATIO,
        borderRadius: 4 * WIDTH_RATIO,
        backgroundColor: Colors.primaryGreen,
        ...ApplicationStyles.utils.middle,
      },
    });

    return <OriginalComponent {...props} styles={styles} />;
  };
