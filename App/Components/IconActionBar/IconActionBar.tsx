import React, { ReactElement, useState } from "react";
import { View, Text, Switch, Pressable } from "react-native";
import { compose } from "ramda";
import { IconActionBarStyle } from "./IconActionBarStyle";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNSwitch from "../RNComponents/RNSwitch";

interface IconActionBarProps {
  styles: any;
  title: string;
  description: string;
  onPress?: () => void;
  renderIcon: () => ReactElement;
  showSwitch?: false;
  onSwitchValueChange?: (value: boolean) => void;
  switchValue?: boolean;
}

function IconActionBar(props: IconActionBarProps) {
  const {
    styles,
    title,
    description,
    onPress,
    renderIcon,
    showSwitch,
    onSwitchValueChange,
    switchValue,
  } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {showSwitch && (
        <View style={styles.switchContainer}>
          <RNSwitch value={switchValue} onValueChange={onSwitchValueChange} />
        </View>
      )}
    </Pressable>
  );
}

IconActionBar.propTypes = {
  onPress: PropTypes.func.isRequired,
  renderIcon: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  onSwitchValueChange: PropTypes.func,
  showSwitch: PropTypes.bool,
  switchValue: PropTypes.bool,
};

IconActionBar.defaultProps = {
  onPress: () => {},
  renderIcon: () => <View />,
  title: "",
  onSwitchValueChange: () => {},
};

export default compose(IconActionBarStyle)(IconActionBar);
