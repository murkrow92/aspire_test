import React, { ReactElement, useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { ApplicationStyles, Colors } from "Themes";

export const RNSwitchStyle = (
  OriginalComponent: (props: any) => React.ReactElement,
) => (props: any): ReactElement => {
  const { style = {}, thumbStyle = {} } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    track: {
      width: 40 * WIDTH_RATIO,
      height: 22 * WIDTH_RATIO,
      borderRadius: 18 * WIDTH_RATIO,
      justifyContent: "center",
      ...style,
    },
    thumb: {
      backgroundColor: Colors.white,
      width: 20 * WIDTH_RATIO,
      height: 20 * WIDTH_RATIO,
      borderRadius: 10 * WIDTH_RATIO,
      ...thumbStyle,
    },
  });

  // @ts-ignore
  return <OriginalComponent {...props} styles={styles} />;
};
