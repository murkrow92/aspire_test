import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { TabLabelStyle } from "./TabLabelStyle";
import { compose } from "ramda";

interface TabLabelProps {
  styles: any;
  Icon: any;
  label: string;
}
function TabLabel(props: TabLabelProps) {
  const { styles, Icon, label } = props;
  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

TabLabel.propTypes = {};

TabLabel.defaultProps = {
  onPress: () => {},
};

export default compose(TabLabelStyle)(TabLabel);
