import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { RNSwitchStyle } from "./RNSwitchStyle";
import PropTypes from "prop-types";
import Animated, { spring, interpolateColors } from "react-native-reanimated";
import { Colors } from "Themes";

interface RNSwitchProps {
  styles: any;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

function RNSwitch(props: RNSwitchProps): ReactElement {
  const { styles, value, onValueChange } = props;
  const [switchTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 18,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 2,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  const interpolateTrackStyle = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: [Colors.descriptionText, Colors.primaryGreen],
    }),
    shadowColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: ["rgba(132, 30, 22, 0.16)", "transparent"],
    }),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  };

  const interpolateThumbStyle = {
    shadowColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: ["rgba(132, 30, 22, 0.16)", "transparent"],
    }),
  };

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    onValueChange(!value);
  }, [onValueChange, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
      <Animated.View style={[styles.track, interpolateTrackStyle]}>
        <Animated.View
          style={[
            styles.thumb,
            interpolateThumbStyle,
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}

RNSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

RNSwitch.defaultProps = {
  value: false,
  onValueChange: () => {},
};

export default RNSwitchStyle(RNSwitch);
