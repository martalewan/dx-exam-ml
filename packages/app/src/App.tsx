<script src="http://localhost:8097"></script>
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { CreateGameScreen } from "./components/screens/CreateGameScreen";
import { NewGame } from "./components/screens/CreateGameScreenTypes";
import { GamesScreen } from "./components/screens/GamesScreen";
import { LeaderBoardScreen } from "./components/screens/LeaderBoardScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { PlayScreen } from "./components/screens/PlayScreen";
import { SignInScreen } from "./components/screens/SignInScreen";

export function App(): JSX.Element {
  const [isSignInPageVissible, setIsSignInPageVissible] = React.useState(true);
  const [isLoginPageVissible, setIsLoginPageVissible] = React.useState(false);
  const [isGamesPageVissible, setIsGamesPageVissible] = React.useState(false);
  const [isCreateGamesPageVissible, setIsCreateGamesPageVissible] =
    React.useState(false);
  const [isPlayPageVissible, setIsPlayPageVissible] = React.useState(false);
  const [isLeaderPageVissible, setIsLeaderPageVissible] = React.useState(false);

  isLeaderPageVissible

  const [games, setGames] = React.useState<NewGame[]>([
    {
      name: "Game Name",
      id: Math.random().toString(),
      creationDate: new Date().toLocaleString(),
      opponentName: "Opponent",
      gridSize: "8",
      winner: "winner",
    },
    {
      name: "Game Name 2",
      id: Math.random().toString(),
      creationDate: new Date().toLocaleString(),
      opponentName: "Opponent",
      gridSize: "8",
      winner: "winner",
    },
  ]);

  const [currentGameName, setCurrentGameName] = React.useState("");
  const [currentGameSize, setCurrentGameSize] = React.useState("");
  const [currentGameOpponent, setCurrentGameOpponent] = React.useState("");

  return (
    <SafeAreaView style={styles.root}>
      {isSignInPageVissible && (
        <SignInScreen
          setIsSignInPageVissible={setIsSignInPageVissible}
          setIsLoginPageVissible={setIsLoginPageVissible}
        />
      )}
      {isLoginPageVissible && (
        <LoginScreen
          setIsGamePageVissible={setIsGamesPageVissible}
          setIsLoginPageVissible={setIsLoginPageVissible}
        />
      )}
      {isGamesPageVissible && (
        <GamesScreen
          setIsGamesPageVissible={setIsGamesPageVissible}
          setIsCreateGamesPageVissible={setIsCreateGamesPageVissible}
          games={games}
        />
      )}
      {isCreateGamesPageVissible && (
        <CreateGameScreen
          setIsPlayPageVissible={setIsPlayPageVissible}
          setIsCreateGamesPageVissible={setIsCreateGamesPageVissible}
          games={games}
          setGames={setGames}
          currentGameName={currentGameName}
          currentGameSize={currentGameSize}
          currentGameOpponent={currentGameOpponent}
          setCurrentGameName={setCurrentGameName}
          setCurrentGameSize={setCurrentGameSize}
          setCurrentGameOpponent={setCurrentGameOpponent}
        />
      )}
      {isPlayPageVissible && (
        <PlayScreen
          setIsPlayPageVissible={setIsPlayPageVissible}
          setIsCreateGamesPageVissible={setIsCreateGamesPageVissible}
          setIsLeaderPageVissible={setIsLeaderPageVissible}
          currentGameName={currentGameName}
          currentGameSize={currentGameSize}
          currentGameOpponent={currentGameOpponent}
        />
      )}
      {isLeaderPageVissible && (
        <LeaderBoardScreen
        setIsCreateGamesPageVissible={setIsCreateGamesPageVissible}
        setIsLeaderPageVissible= {setIsLeaderPageVissible}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 8,
  },
});
