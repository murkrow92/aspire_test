import React, { useMemo } from "react";
import {
  useRoute,
  useNavigation,
  StackActions,
} from "@react-navigation/native";

export const useNavigationMethods = (params = {}) => {
  const navigation = useNavigation();
  const route = useRoute();

  function goBack() {
    navigation.goBack();
  }

  function pop(count: number) {
    // @ts-ignore
    navigation.pop(count);
  }

  function goToScreen(screenName: string, params: object = {}) {
    navigation.navigate(screenName, params);
  }

  function pushScreen(screenName: string, params: object = {}) {
    // @ts-ignore
    navigation.push(screenName, params);
  }

  function getParam(key: string, defaultValue: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMemo(() => {
      // @ts-ignore
      return route.params && route.params[key]
        ? // @ts-ignore
          route.params[key]
        : defaultValue;
    }, []);
  }

  function replace(screenName: string, params: object = {}) {
    navigation.dispatch(StackActions.replace(screenName, params));
  }

  function resetStackToTab() {
    navigation.dispatch(StackActions.replace("Tab"));
  }

  function dispatch(params: any = {}) {
    navigation.dispatch(params);
  }

  function validateParams() {
    const resultParams = {};
    const paramKeys = Object.keys(params);
    for (const key of paramKeys) {
      // @ts-ignore
      resultParams[key] =
        // @ts-ignore
        route.params && route.params[key] ? route.params[key] : params[key];
    }

    return resultParams;
  }

  return useMemo(
    () => ({
      goBack,
      goToScreen,
      pushScreen,
      getParam,
      pop,
      replace,
      resetStackToTab,
      dispatch,
      validatedParams: validateParams(),
    }),
    [navigation, route],
  );
};
