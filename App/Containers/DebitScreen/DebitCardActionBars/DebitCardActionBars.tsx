import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { DebitCardActionBarsStyle } from "./DebitCardActionBarsStyle";
import PropTypes from "prop-types";
import IconActionBar from "Components/IconActionBar/IconActionBar";
import WithCardActions from "Business/WithCardActions";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";
import { Colors } from "Themes";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigationMethods } from "Hooks/useNavigationMethods";

interface DebitCardActionBarsProps {
  styles: any;
  card: any;
  updateCard: (
    params: any,
    onSuccess?: () => void,
    onFailed?: () => void,
  ) => void;
}

function DebitCardActionBars(props: DebitCardActionBarsProps) {
  const { styles, card, updateCard } = props;
  const { cardLimit, limitStatus, activeStatus } = card.debitCard;
  const NavigationMethods = useNavigationMethods();

  function onLimitSwitchChange(value: boolean) {
    if (cardLimit > 0) {
      const params = {
        limitStatus: value,
      };

      updateCard(params);
    } else {
      goToSpendingLimitScreen();
    }
  }

  function goToSpendingLimitScreen() {
    NavigationMethods.goToScreen("SpendingLimitScreen");
  }

  return (
    <View style={styles.container}>
      <IconActionBar
        title={"Top-up account"}
        description={"Deposit money to your account to use with card"}
        renderIcon={() => {
          return (
            <Feather
              name={"share"}
              size={24 * WIDTH_RATIO}
              color={Colors.white}
            />
          );
        }}
      />
      <BlockDivider height={20 * WIDTH_RATIO} />
      <IconActionBar
        title={"Weekly spending limit"}
        description={
          cardLimit > 0
            ? cardLimit
            : "You haven't set any spending limit on card"
        }
        showSwitch={true}
        switchValue={limitStatus}
        onPress={goToSpendingLimitScreen}
        onSwitchValueChange={onLimitSwitchChange}
        renderIcon={() => {
          return (
            <Ionicons
              name={"speedometer"}
              size={24 * WIDTH_RATIO}
              color={Colors.white}
            />
          );
        }}
      />
      <BlockDivider height={20 * WIDTH_RATIO} />
      <IconActionBar
        title={"Freeze card"}
        description={"Your debit card is currently active"}
        showSwitch={true}
        switchValue={!activeStatus}
        renderIcon={() => {
          return (
            <Ionicons
              name={"snow"}
              size={24 * WIDTH_RATIO}
              color={Colors.white}
            />
          );
        }}
      />
      <BlockDivider height={20 * WIDTH_RATIO} />
      <IconActionBar
        title={"Get a new card"}
        description={"This deactivates your current debit card"}
        renderIcon={() => {
          return (
            <MaterialCommunityIcons
              name={"credit-card-plus"}
              size={24 * WIDTH_RATIO}
              color={Colors.white}
            />
          );
        }}
      />
      <BlockDivider height={20 * WIDTH_RATIO} />
      <IconActionBar
        title={"Deactivate cards"}
        description={"Your previously deactivated cards"}
        renderIcon={() => {
          return (
            <FontAwesome
              name={"ban"}
              size={24 * WIDTH_RATIO}
              color={Colors.white}
            />
          );
        }}
      />
      <BlockDivider height={20 * WIDTH_RATIO} />
    </View>
  );
}

DebitCardActionBars.propTypes = {
  onPress: PropTypes.func.isRequired,
};

DebitCardActionBars.defaultProps = {
  onPress: () => {},
};

export default compose(
  DebitCardActionBarsStyle,
  WithCardActions,
)(DebitCardActionBars);
