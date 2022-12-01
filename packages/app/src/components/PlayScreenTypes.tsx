export type Array = {
    id: string;
    x: number;
    y: number;
    gridSize: number;
    gameId: string;
    fill: string;
    winningCell: string;
  };
  
  export interface IPlayScreenProps {
    setIsPlayPageVissible: (arg0: boolean) => void;
    setIsCreateGamesPageVissible: (arg0: boolean) => void;
    setIsLeaderPageVissible: (arg0: boolean) => void;
    currentGameName: string;
    currentGameSize: string;
    currentGameOpponent: string;
  }
  