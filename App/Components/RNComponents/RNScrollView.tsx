import React, { forwardRef, ReactNode } from "react";
import { ScrollView, ScrollViewProps } from "react-native";

interface Props extends ScrollViewProps {
  children: ReactNode;
}

function RNScrollView(props: Props, ref: any) {
  return (
    <ScrollView
      bounces={false}
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      {...props}
      ref={ref}>
      {props.children}
    </ScrollView>
  );
}

export default forwardRef(RNScrollView);
