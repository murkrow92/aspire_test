import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Metrics, { deviceHeight, deviceWidth } from "Themes/Metrics";
import TabLabel from "Components/TabLabel/TabLabel";
import { Colors } from "Themes";
import DebitScreen from "Containers/DebitScreen/DebitScreen";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  placeholder: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "white",
  },
});

function Placeholder() {
  return <View style={styles.placeholder} />;
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={"DebitCardScreen"}
      screenOptions={{}}
      lazy={false}
      tabBarOptions={{
        style: {
          width: deviceWidth,
          height: Metrics.bottomTabHeight,
          borderTopWidth: 0,
          backgroundColor: Colors.white,
          shadowColor: "rgba(42, 53, 113, 0.16)",
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowRadius: 2,
          shadowOpacity: 1,
          elevation: 4,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="home" />;
          },
        }}
        component={Placeholder}
      />
      <Tab.Screen
        name="DebitCardScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="debit" />;
          },
        }}
        component={DebitScreen}
      />
      <Tab.Screen
        name="PaymentScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="payment" />;
          },
        }}
        component={Placeholder}
      />
      <Tab.Screen
        name="CreditScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="credit" />;
          },
        }}
        component={Placeholder}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabLabel focused={focused} name="profile" />;
          },
        }}
        component={Placeholder}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
