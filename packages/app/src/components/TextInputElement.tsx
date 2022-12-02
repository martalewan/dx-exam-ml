import React, { FC }  from "react";
import { StyleSheet, TextInput } from "react-native";
import { ITextInputElement } from "./TextInputElementTypes";

export const TextInputElement: FC<ITextInputElement> = (props): JSX.Element => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.fileldPlaceholder}
      value={props.fieldValue}
      onChangeText={val => props.fieldSetter(val)}
    />
  );
}

export const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  }
});