import React, { FC }  from "react";
import { StyleSheet, Text } from "react-native";
import { IHeaderProps } from "./HeaderTypes";

export const Header: FC<IHeaderProps> = (props): JSX.Element => {
  return (
    <Text style={styles.header}>{props.text}</Text>

  );
}

export const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginBottom: 12,
    color: "white"
  },
});