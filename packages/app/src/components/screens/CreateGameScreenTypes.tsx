export type NewGame = {
  name: string;
  id: string;
  creationDate: string;
  opponentName: string;
  gridSize: string;
  winner: string;
};

export interface ICreateGameScreen {
  setIsPlayPageVissible: (arg0: boolean) => void;
  setIsCreateGamesPageVissible: (arg0: boolean) => void;
  games: NewGame[];
  setGames: (arg0: NewGame[]) => void;
  currentGameName: string;
  currentGameSize: string;
  currentGameOpponent: string;
  setCurrentGameName: (arg0: string) => void;
  setCurrentGameSize: (arg0: string) => void;
  setCurrentGameOpponent: (arg0: string) => void;
}