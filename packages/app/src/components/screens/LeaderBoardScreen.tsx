import React, { FC } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Header } from "../Header";

interface ILeaderBoardScreen {
  setIsCreateGamesPageVissible: (arg0: boolean) => void;
  setIsLeaderPageVissible: (arg0: boolean) => void;
}

export type Winers = {
  name: string;
  numOfWins: number;
};

export const LeaderBoardScreen: FC<ILeaderBoardScreen> = (props): JSX.Element => {
  const [bestPlayers, setBestPlayers] = React.useState([
    {name: "Jeff", numOfWins: 21},
    {name: "George", numOfWins: 20},
    {name: "Lola", numOfWins: 19},
    {name: "Stefania", numOfWins: 17},
    {name: "Jeff", numOfWins: 15},
    {name: "Jeff", numOfWins: 14},
    {name: "Jeff", numOfWins: 13},
    {name: "Jeff", numOfWins: 11},
    {name: "Jeff", numOfWins: 10},
    {name: "Jeff", numOfWins: 9},
  ]);
  
  const onGoToCreatePress = () => {
    props.setIsLeaderPageVissible(false);
    props.setIsCreateGamesPageVissible(true);

  };

  return (
    <>
      <Header text={"Leader Board"}></Header>
      <FlatList
        data={bestPlayers}
        renderItem={({ item }) => (
					<View>
					  <Text style={styles.winerItem}>{item.name} - {item.numOfWins}</Text>
					</View>
        )}
      />
      <Button title="Go back" onPress={() => onGoToCreatePress()} />
    </>
  );
}

const styles = StyleSheet.create({
  winerItem: {
    color: "white"
  }
});
