import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface ILeaderBoardScreen {
  setIsCreateGamesPageVissible: (arg0: boolean) => void;
  setIsLeaderPageVissible: (arg0: boolean) => void;
}

export const LeaderBoardScreen: FC<ILeaderBoardScreen> = (props): JSX.Element => {
  const [bestPlayers, setBestPlayers] = React.useState([]);
  
  const onGoToCreatePress = () => {
    props.setIsLeaderPageVissible(false);
    props.setIsCreateGamesPageVissible(true);

  };

  return (
    <>
      <Text style={styles.header}>33</Text>
      <View style={styles.header}>
      <Button title="Go back" onPress={() => onGoToCreatePress()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    marginBottom: 12,
  },
});
