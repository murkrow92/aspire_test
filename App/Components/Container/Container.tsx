import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  KeyboardAvoidingViewProps,
  StatusBarStyle,
} from "react-native";
import PropTypes from "prop-types";
import { ContainerStyle } from "./ContainerStyle";
import { useFocusEffect } from "@react-navigation/native";

interface ContainerProps {
  styles: any;
  behavior?: "height" | "padding" | "position" | undefined;
  statusBarColor: string;
  notSafeArea?: boolean;
  statusBarContent: StatusBarStyle;
  Colors: any;
  children: any;
}

function Container(props: ContainerProps) {
  const {
    styles,
    behavior,
    statusBarColor,
    notSafeArea,
    statusBarContent,
    Colors,
  } = props;

  useFocusEffect(() => {
    StatusBar.setBarStyle(statusBarContent);
    return () => {
      StatusBar.setBarStyle(Colors.statusBarContent);
    };
  });

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.wrapper}
      keyboardVerticalOffset={0}>
      <StatusBar
        barStyle={statusBarContent}
        backgroundColor={notSafeArea ? "transparent" : statusBarColor}
        translucent={notSafeArea}
      />
      {notSafeArea ? (
        <View style={styles.container}>{props.children}</View>
      ) : (
        <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );
}

Container.propTypes = {
  translucent: PropTypes.bool,
  behavior: PropTypes.any,
  statusBarColor: PropTypes.string,
  statusBarContent: PropTypes.oneOf([
    "light-content",
    "dark-content",
    "default",
  ]),
  style: PropTypes.any,
  notSafeArea: PropTypes.bool,
  isPadding: PropTypes.bool,
  paddingStyle: PropTypes.any,
};

Container.defaultProps = {
  behavior: Platform.select({
    android: "height",
    ios: "padding",
  }),
  style: {},
  notSafeArea: false,
  isPadding: false,
  paddingStyle: {},
};

export default ContainerStyle(Container);
