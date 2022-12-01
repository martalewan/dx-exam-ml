import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { TextInputElement } from "./TextInputElement";

export default function LoginScreen(props: {
    setIsGamePageVissible: (arg0: boolean) => void;
    setIsLoginPageVissible: (arg0: boolean) => void; 
}) {
    const [loggedUserEmail, SetLoggedUserEmail] = React.useState("");
    const [loggedUserPassword, setLoggedUserPassword] = React.useState("");

    const signInData = [
        {
          placeholder: "User Name",
          value: loggedUserEmail,
          onChangeText: SetLoggedUserEmail
        },
        {
          placeholder: "Email",
          value: loggedUserPassword,
          onChangeText: setLoggedUserPassword
        },
      ]


    const onPressLogin = () => {
        props.setIsGamePageVissible(true)
        props.setIsLoginPageVissible(false)
    };

  return (
    <>
      <Text style={styles.header}>Log In</Text>
      <TextInputElement
            fileldPlaceholder={signInData[0].placeholder}
            fieldValue={signInData[0].value}
            fieldSetter={signInData[0].onChangeText}
        />
      <TextInputElement
            fileldPlaceholder={signInData[1].placeholder}
            fieldValue={signInData[1].value}
            fieldSetter={signInData[1].onChangeText}
        />
      <Button
        title="Log in"
        onPress={() => onPressLogin()}
      />
    </>
  );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        marginBottom: 12,
      },
      input: {
        height: 40,
        width: 150, 
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
      }
});