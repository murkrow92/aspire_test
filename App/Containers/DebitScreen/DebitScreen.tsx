import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { Colors } from "Themes";
import { DebitScreenStyle } from "./DebitScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import DebitScreenHeader from "Containers/DebitScreen/DebitScreenHeader/DebitScreenHeader";
import DebitCardInfo from "Components/DebitCardInfo/DebitCardInfo";
import DebitCardActionBars from "Containers/DebitScreen/DebitCardActionBars/DebitCardActionBars";
import WithCardActions from "Business/WithCardActions";

interface DebitScreenProps {
  styles: any;
  navigation: any;
  route: any;
  getCard: () => void;
}

function DebitScreen(props: DebitScreenProps) {
  const { styles, getCard } = props;
  const NavigationMethods = useNavigationMethods();

  useEffect(() => {
    getCard();
  }, []);

  return (
    <Container notSafeArea>
      <DebitScreenHeader />
      <RNScrollView style={styles.absoluteScrollView}>
        <View style={styles.main}>
          <View style={styles.debitCard}>
            <DebitCardInfo />
          </View>
          <DebitCardActionBars />
        </View>
      </RNScrollView>
    </Container>
  );
}

export default compose(
  DebitScreenStyle,
  WithCardActions,
)(DebitScreen);
