import React, { useMemo } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";

function BlockDivider({
  height = 35 * WIDTH_RATIO,
  width = 0,
  small = false,
  backgroundColor = "transparent",
}) {
  return useMemo(() => {
    return (
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: backgroundColor,
        }}
      />
    );
  }, [height, width, small, backgroundColor]);
}

BlockDivider.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  small: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

BlockDivider.defaultProps = {};

export default BlockDivider;
