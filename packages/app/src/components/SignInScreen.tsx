import React, { FC }  from "react";
import { Button, StyleSheet, Text } from "react-native";
import { TextInputElement } from "./TextInputElement";

interface ISignInScreen {
  setIsSignInPageVissible: (arg0: boolean) => void; 
  setIsLoginPageVissible: (arg0: boolean) => void; 
}

export const SignInScreen: FC<ISignInScreen>  = (props): JSX.Element => {
    const [newUserName, setNewUserName] = React.useState("");
    const [newUserEmail, setNewUserEmail] = React.useState("");
    const [newUserPassword, setNewUserPassword] = React.useState("");

    const signInData = [
        {
          placeholder: "User Name",
          value: newUserName,
          onChangeText: setNewUserName
        },
        {
          placeholder: "Email",
          value: newUserEmail,
          onChangeText: setNewUserEmail
        },
        {
          placeholder: "New Password",
          value: newUserPassword,
          onChangeText: setNewUserPassword
        },
    ];

    const onPressSignIn = () => {
        props.setIsLoginPageVissible(true)
        props.setIsSignInPageVissible(false)
    };
    
  return (
    <>
      <Text style={styles.header}>Create An Account</Text>
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
        <TextInputElement
            fileldPlaceholder={signInData[2].placeholder}
            fieldValue={signInData[2].value}
            fieldSetter={signInData[2].onChangeText}
        />
      <Button
        title="Create account"
        onPress={() => onPressSignIn()}
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