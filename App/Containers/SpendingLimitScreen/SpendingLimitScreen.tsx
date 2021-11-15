import React, { ReactElement, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { Colors } from "Themes";
import { SpendingLimitScreenStyle } from "./SpendingLimitScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import AppBackgroundHeader from "Components/AppBackgroundHeader/AppBackgroundHeader";

interface SpendingLimitScreenProps {
  styles: any;
  navigation: any;
  route: any;
}

function SpendingLimitScreen(props: SpendingLimitScreenProps): ReactElement {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container notSafeArea>
      <AppBackgroundHeader title={"Spending limit"} showBackButton={true} />
      <RNScrollView style={styles.absoluteScrollView}>
        <View style={styles.main}></View>
      </RNScrollView>
    </Container>
  );
}

export default SpendingLimitScreenStyle(SpendingLimitScreen);
