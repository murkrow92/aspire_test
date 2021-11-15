import React, { ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { AppBackgroundHeaderStyle } from "./AppBackgroundHeaderStyle";
import PropTypes from "prop-types";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "Themes";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import Entypo from "react-native-vector-icons/Entypo";

interface AppBackgroundHeaderProps {
  styles: any;
  title?: string;
  renderFooter?: () => ReactElement;
  onBackPress?: () => void;
  showBackButton?: true;
}

function AppBackgroundHeader(props: AppBackgroundHeaderProps) {
  const { styles, renderFooter, title, showBackButton, onBackPress } = props;
  const NavigationMethods = useNavigationMethods();

  function renderBackButton() {
    return (
      <TouchableOpacity
        onPress={onBackPress || NavigationMethods.goBack}
        style={styles.backButton}>
        <Entypo
          name={"chevron-thin-left"}
          color={Colors.white}
          size={24 * WIDTH_RATIO}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {showBackButton && renderBackButton()}
        <View style={styles.flexOne} />
        <Ionicons
          name={"logo-angular"}
          color={Colors.primaryGreen}
          size={32 * WIDTH_RATIO}
        />
      </View>
      <BlockDivider height={20 * WIDTH_RATIO} />
      <Text style={styles.h5BoldWhite}>{title}</Text>
      {renderFooter ? renderFooter() : <View />}
    </View>
  );
}

AppBackgroundHeader.defaultProps = {
  renderFooter: () => <View />,
};

export default compose(AppBackgroundHeaderStyle)(AppBackgroundHeader);
