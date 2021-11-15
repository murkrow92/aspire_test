import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { isAndroid } from "Utils/Platform";
import TabNavigator from "./TabNavigator";
import SpendingLimitScreen from "Containers/SpendingLimitScreen/SpendingLimitScreen";

const RootStack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        initialRouteName="SpendingLimitScreen"
        screenOptions={
          isAndroid()
            ? {
                cardStyle: { backgroundColor: "transparent" },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                  cardStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                  overlayStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.5],
                      extrapolate: "clamp",
                    }),
                  },
                }),
              }
            : {}
        }>
        <RootStack.Screen name="Tab" component={TabNavigator} />
        <RootStack.Screen
          name="SpendingLimitScreen"
          component={SpendingLimitScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
