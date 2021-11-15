import React from "react";
import { StyleSheet } from "react-native";
import Metrics, { deviceWidth, WIDTH_RATIO } from "Themes/Metrics";

import { ApplicationStyles, Colors } from "Themes";

export const DebitCardInfoStyle = (OriginalComponent: any) => (props: any) => {
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    container: {
      marginTop: -12 * WIDTH_RATIO,
      zIndex: 2,
      width: Metrics.debitCard.width,
      height: Metrics.debitCard.height,
      backgroundColor: Colors.primaryGreen,
      borderRadius: 12 * WIDTH_RATIO,
      paddingHorizontal: 20 * WIDTH_RATIO,
    },
    toggleButton: {
      zIndex: 1,
      alignSelf: "flex-end",
      width: 180 * WIDTH_RATIO,
      ...ApplicationStyles.utils.centerRow,
      paddingLeft: 16 * WIDTH_RATIO,
      paddingBottom: 16 * WIDTH_RATIO,
      backgroundColor: Colors.white,
      borderRadius: 8 * WIDTH_RATIO,
    },
    toggleText: {
      ...ApplicationStyles.text.h9White,
      color: Colors.primaryGreen,
      fontWeight: "500",
    },
    number: {
      ...ApplicationStyles.text.h7White,
      fontWeight: "600",
    },
    cardHeaderText: {
      ...ApplicationStyles.text.h6White,
      fontWeight: "600",
    },
    cardText: {
      ...ApplicationStyles.text.h8White,
      fontWeight: "600",
    },
    numberDot: {
      width: 10 * WIDTH_RATIO,
      height: 10 * WIDTH_RATIO,
      borderRadius: 5 * WIDTH_RATIO,
      backgroundColor: "white",
      marginRight: 2 * WIDTH_RATIO,
    },
    logoContainer: {
      width: "100%",
      ...ApplicationStyles.utils.centerRow,
      justifyContent: "flex-end",
    },
    footer: {
      ...ApplicationStyles.utils.centerRow,
      justifyContent: "flex-end",
    },
    visaLogo: {
      width: 60 * WIDTH_RATIO,
      height: 20 * WIDTH_RATIO,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
