import React, { useMemo, useState } from "react";
import { View, Text, Image, ListRenderItemInfo } from "react-native";
import { compose } from "ramda";
import { DebitCardInfoStyle } from "./DebitCardInfoStyle";
import PropTypes from "prop-types";
import WithCardActions from "Business/WithCardActions";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";
import { RNFlatList } from "../RNComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "Themes";
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import IconVisa from "Assets/Images/Icons/icon_visa.png";

interface DebitCardInfoProps {
  card: any;
  getCard: () => void;
  styles: any;
}
function DebitCardInfo(props: DebitCardInfoProps) {
  const { styles, card } = props;
  const { debitCard, fetchingCard } = card;
  const { cardNumber, cardHolder, expireMonth, expireYear, cvv } = debitCard;
  const [showCardNumber, setShowCardNumber] = useState(false);

  function onToggleShowPress() {
    setShowCardNumber(prevState => !prevState);
  }

  const renderData = useMemo(() => {
    return cardNumber.split("");
  }, [cardNumber]);

  function renderToggleButton() {
    return (
      <TouchableOpacity style={styles.toggleButton} onPress={onToggleShowPress}>
        <MaterialIcons
          name={showCardNumber ? "visibility-off" : "visibility"}
          color={Colors.primaryGreen}
          size={20 * WIDTH_RATIO}
        />
        <BlockDivider width={8 * WIDTH_RATIO} />
        <Text style={styles.toggleText}>
          {showCardNumber ? "Hide card number" : "Show card number"}
        </Text>
      </TouchableOpacity>
    );
  }

  function renderNumberItem({ item, index }: ListRenderItemInfo<any>) {
    const showNumber = showCardNumber || index >= cardNumber.length - 4;
    return (
      <View style={styles.centerRow}>
        {showNumber ? (
          <Text style={styles.number}>{item}</Text>
        ) : (
          <View style={styles.numberDot} />
        )}
        {index % 4 === 3 && <BlockDivider width={16 * WIDTH_RATIO} />}
      </View>
    );
  }

  return (
    <View>
      {renderToggleButton()}
      <View style={styles.container}>
        <BlockDivider height={20 * WIDTH_RATIO} />
        <View style={styles.logoContainer}>
          <Ionicons
            name={"logo-angular"}
            color={Colors.white}
            size={24 * WIDTH_RATIO}
          />
          <BlockDivider width={2 * WIDTH_RATIO} />
          <Text style={styles.cardHeaderText}>aspire</Text>
        </View>
        <BlockDivider height={20 * WIDTH_RATIO} />
        <Text style={styles.h6BoldWhite}>{cardHolder}</Text>
        <BlockDivider height={20 * WIDTH_RATIO} />
        <View>
          <RNFlatList
            data={renderData}
            renderItem={renderNumberItem}
            dividerWidth={4 * WIDTH_RATIO}
            horizontal={true}
          />
        </View>
        <BlockDivider height={8 * WIDTH_RATIO} />
        <View style={styles.centerRow}>
          <Text style={styles.cardText}>
            Thru: {expireMonth}/{expireYear}
          </Text>
          <BlockDivider width={20 * WIDTH_RATIO} />
          <Text style={styles.cardText}>
            CVV:{" "}
            {showCardNumber ? (
              <Text style={styles.cardText}>{cvv} </Text>
            ) : (
              <Text style={styles.h8BoldWhite}>&#65290;&#65290;&#65290;</Text>
            )}
          </Text>
        </View>
        <View style={styles.footer}>
          <Image
            source={IconVisa}
            style={styles.visaLogo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

DebitCardInfo.propTypes = {
  onPress: PropTypes.func.isRequired,
};

DebitCardInfo.defaultProps = {
  onPress: () => {},
};

export default compose(
  DebitCardInfoStyle,
  WithCardActions,
)(DebitCardInfo);
