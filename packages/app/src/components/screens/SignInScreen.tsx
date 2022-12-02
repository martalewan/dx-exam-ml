import React, { FC }  from "react";
import { Button } from "react-native";
import { Header } from "../Header";
import { TextInputElement } from "../TextInputElement";
import { ISignInScreen } from "./SignInScreenTypes";

export const SignInScreen: FC<ISignInScreen>  = (props): JSX.Element => {
    const [newUserName, setNewUserName] = React.useState("");
    const [newUserEmail, setNewUserEmail] = React.useState("");
    const [newUserPassword, setNewUserPassword] = React.useState("");

    const onPressSignIn = () => {
        props.setIsLoginPageVissible(true)
        props.setIsSignInPageVissible(false)
    };
    
  return (
    <>
      <Header text={"Create An Account"}></Header>
      <TextInputElement
            fileldPlaceholder="User Name"
            fieldValue={newUserName}
            fieldSetter={setNewUserName}
        />
      <TextInputElement
            fileldPlaceholder="Email"
            fieldValue={newUserEmail}
            fieldSetter={setNewUserEmail}
        />
        <TextInputElement
            fileldPlaceholder="New Password"
            fieldValue={newUserPassword}
            fieldSetter={setNewUserPassword}
        />
      <Button
        title="Create account"
        onPress={() => onPressSignIn()}
      />
    </>
  );
}
