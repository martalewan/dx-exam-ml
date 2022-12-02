import React from "react";
import { Button } from "react-native";
import { Header } from "../Header";
import { TextInputElement } from "../TextInputElement";

export default function LoginScreen(props: {
    setIsGamePageVissible: (arg0: boolean) => void;
    setIsLoginPageVissible: (arg0: boolean) => void; 
}) {
    const [loggedUserEmail, SetLoggedUserEmail] = React.useState("");
    const [loggedUserPassword, setLoggedUserPassword] = React.useState("");

    const onPressLogin = () => {
        props.setIsGamePageVissible(true)
        props.setIsLoginPageVissible(false)
    };

  return (
    <>
      <Header text={"Log In"}></Header>
      <TextInputElement
            fileldPlaceholder="User Name"
            fieldValue={loggedUserEmail}
            fieldSetter={SetLoggedUserEmail}
        />
      <TextInputElement
            fileldPlaceholder="Email"
            fieldValue={loggedUserPassword}
            fieldSetter={setLoggedUserPassword}
        />
      <Button
        title="Log in"
        onPress={() => onPressLogin()}
      />
    </>
  );
}