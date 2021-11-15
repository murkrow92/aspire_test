import React, { forwardRef } from "react";
import { FlatList, FlatListProps } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import BlockDivider from "../Dividers/BlockDivider";

function keyExtractor(item: any, index: number) {
  return `flatListItem${index.toString()}`;
}

interface ExtendedFlatListProps extends FlatListProps<any> {
  dividerWidth?: number;
  dividerHeight?: number;
  dividerColor?: string;
}

function RNFlatList(props: ExtendedFlatListProps, ref: any) {
  const {
    dividerWidth = 16 * WIDTH_RATIO,
    dividerHeight = 16 * WIDTH_RATIO,
    dividerColor = "transparent",
  } = props;

  function renderDivider() {
    return (
      <BlockDivider
        width={dividerWidth}
        height={dividerHeight}
        backgroundColor={dividerColor}
      />
    );
  }

  return (
    <FlatList
      ref={ref}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderDivider}
      {...props}
    />
  );
}

export default forwardRef(RNFlatList);
