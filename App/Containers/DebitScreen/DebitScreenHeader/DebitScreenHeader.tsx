import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { compose } from "ramda";
import { DebitScreenHeaderStyle } from "./DebitScreenHeaderStyle";
import PropTypes from "prop-types";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";
import { Colors } from "Themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { formatCurrency } from "Utils/CurrencyFormatter";
import WithCardActions from "Business/WithCardActions";
import AppBackgroundHeader from "Components/AppBackgroundHeader/AppBackgroundHeader";

function DebitScreenHeader(props: any) {
  const { styles, card } = props;
  const { balance } = card.debitCard;

  function renderBalance() {
    return (
      <View>
        <BlockDivider height={32 * WIDTH_RATIO} />
        <Text style={styles.h7White}>Available balance</Text>
        <BlockDivider height={16 * WIDTH_RATIO} />
        <View style={styles.centerRow}>
          <View style={styles.currencyContainer}>
            <Text style={styles.h8BoldWhite}>S$</Text>
          </View>
          <BlockDivider width={8 * WIDTH_RATIO} />
          <Text style={styles.h5BoldWhite}>{formatCurrency(balance)}</Text>
        </View>
      </View>
    );
  }
  return (
    <AppBackgroundHeader title={"Debit Card"} renderFooter={renderBalance} />
  );
}

DebitScreenHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
};

DebitScreenHeader.defaultProps = {
  onPress: () => {},
};

export default compose(
  DebitScreenHeaderStyle,
  WithCardActions,
)(DebitScreenHeader);
