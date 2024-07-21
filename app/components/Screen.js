import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight
  },
});

export default Screen;
