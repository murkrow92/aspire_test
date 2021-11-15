import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth, WIDTH_RATIO } from "Themes/Metrics";
import Colors from "./Colors";
import Fonts from "./Fonts";

export const sharedStyles = {
  screen: {
    absoluteScrollView: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 2,
    },
  },
  utils: StyleSheet.create({
    middle: {
      alignItems: "center",
      justifyContent: "center",
    },
    centerRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
    },
    columnWrapper: {
      justifyContent: "space-between",
    },
    flexOne: {
      flex: 1,
    },
    listContent: {
      paddingTop: 18 * WIDTH_RATIO,
      paddingHorizontal: 16 * WIDTH_RATIO,
    },
    scene: {
      width: deviceWidth,
    },
    shadow: {
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 8,
      shadowOpacity: 1,
      elevation: 2,
    },
    shadowLarge: {
      shadowColor: "rgba(42, 53, 113, 0.16)",
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 1,
      elevation: 4,
    },
    hidden: {
      width: 0,
      height: 0,
      overflow: "hidden",
    },
    fullscreen: {
      width: deviceHeight,
      height: deviceWidth,
    },
    fullscreenVertical: {
      width: deviceWidth,
      height: deviceHeight,
    },
  }),
  text: StyleSheet.create({
    alignLeft: {
      textAlign: "left",
    },
    alignCenter: {
      textAlign: "center",
    },
    alignRight: {
      textAlign: "right",
    },
    h1White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 40 * WIDTH_RATIO,
      color: Colors.white,
    },
    h2White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 36 * WIDTH_RATIO,
      color: Colors.white,
    },
    h3White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 32 * WIDTH_RATIO,
      color: Colors.white,
    },
    h4White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 28 * WIDTH_RATIO,
      color: Colors.white,
    },
    h5White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 24 * WIDTH_RATIO,
      color: Colors.white,
    },
    h6White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 20 * WIDTH_RATIO,
      color: Colors.white,
    },
    h7White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 17 * WIDTH_RATIO,
      color: Colors.white,
    },
    h8White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 15 * WIDTH_RATIO,
      color: Colors.white,
    },
    h9White: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.primaryFont,
      fontSize: 13 * WIDTH_RATIO,
      color: Colors.white,
    },
    h1BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 40 * WIDTH_RATIO,
      color: Colors.white,
    },
    h2BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 36 * WIDTH_RATIO,
      color: Colors.white,
    },
    h3BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 32 * WIDTH_RATIO,
      color: Colors.white,
    },
    h4BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 28 * WIDTH_RATIO,
      color: Colors.white,
    },
    h5BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 24 * WIDTH_RATIO,
      color: Colors.white,
    },
    h6BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 20 * WIDTH_RATIO,
      color: Colors.white,
    },
    h7BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 17 * WIDTH_RATIO,
      color: Colors.white,
    },
    h8BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 15 * WIDTH_RATIO,
      color: Colors.white,
    },
    h9BoldWhite: {
      marginTop: 2 * WIDTH_RATIO,
      fontFamily: Fonts.type.boldFont,
      fontSize: 13 * WIDTH_RATIO,
      color: Colors.white,
    },
  }),
};

export default sharedStyles;
