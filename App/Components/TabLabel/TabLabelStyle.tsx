import React, { ReactElement, ReactNode, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Fonts, Colors } from "Themes";
import { WIDTH_RATIO } from "Themes/Metrics";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export const TabLabelStyle = (OriginalComponent: any) => (props: any) => {
  const { focused, name } = props;

  const TabMap = useMemo(() => {
    const color = focused ? Colors.primaryGreen : Colors.descriptionText;
    return {
      home: {
        Icon: () => (
          <Entypo name={"home"} size={20 * WIDTH_RATIO} color={color} />
        ),
        label: "Home",
      },
      debit: {
        Icon: () => (
          <FontAwesome
            name={"credit-card-alt"}
            size={20 * WIDTH_RATIO}
            color={color}
          />
        ),
        label: "Debit Card",
      },
      payment: {
        Icon: () => (
          <AntDesign name={"swap"} size={20 * WIDTH_RATIO} color={color} />
        ),
        label: "Payment",
      },
      credit: {
        Icon: () => (
          <Entypo
            name={"arrow-with-circle-up"}
            size={20 * WIDTH_RATIO}
            color={color}
          />
        ),
        label: "Credit",
      },
      profile: {
        Icon: () => (
          <Ionicons name={"person"} size={20 * WIDTH_RATIO} color={color} />
        ),
        label: "Profile",
      },
    };
  }, [focused]);
  // @ts-ignore
  const Icon = TabMap[name].Icon;
  // @ts-ignore
  const label = TabMap[name].label;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 8 * WIDTH_RATIO,
    },
    icon: {
      width: 20 * WIDTH_RATIO,
      height: 20 * WIDTH_RATIO,
    },
    label: {
      marginTop: 2,
      fontFamily: Fonts.type.primaryFont,
      fontWeight: focused ? "500" : "400",
      color: focused ? Colors.primaryGreen : Colors.descriptionText,
      fontSize: 11 * WIDTH_RATIO,
    },
  });

  return (
    <OriginalComponent {...props} styles={styles} Icon={Icon} label={label} />
  );
};
