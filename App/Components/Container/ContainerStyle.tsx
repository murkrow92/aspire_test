import React from "react";
import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT } from "Themes/Metrics";
import { isAndroid } from "Utils/Platform";
import { Colors } from "Themes";

export const ContainerStyle = (OriginalComponent: any) => (props: any) => {
  const {
    statusBarContent,
    style = {},
    notSafeArea = false,
    horizontal = false,
  } = props;
  const statusBarHeight =
    notSafeArea || horizontal || isAndroid() ? 0 : STATUS_BAR_HEIGHT;
  const content = statusBarContent
    ? statusBarContent
    : notSafeArea
    ? "light-content"
    : "dark-content";
  const statusBarColor = props.statusBarColor
    ? props.statusBarColor
    : Colors.white;

  const wrapperStyle = notSafeArea ? style : {};

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: statusBarColor,
      paddingTop: statusBarHeight,
      ...wrapperStyle,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      ...style,
    },
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
      statusBarContent={content}
      statusBarHeight={statusBarHeight}
      statusBarColor={statusBarColor}
      Colors={Colors}
    />
  );
};
