# dx-exam


Tic Tac Toe (https://en.wikipedia.org/wiki/Tic-tac-toe)

Description:

- Grid size cannot be smaller than 3-by-3 and greater than 20-by-20
- For any grid of 6-by-6 or greater, the goal is to get five in a row. For others, it should be equal to the size of the grid side
- Grid sides are equal
- Grid size should be set before the game is started
- There is only one type of the game – online
- The game is considered completed when there are no moves or one of the players has built a row that satisfies the requirements of the grid

Tic-tac-toe
Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os (Canadian or Irish English) is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players.
https://en.wikipedia.org/wiki/Tic-tac-toe

10:48
Day 1:
Create all UI components and screens. Do not forget about DRY. Components and screens should be adaptive on one desktop and one mobile platform (vertical and horizontal).
There is a list of screens:
“Sign up screen” has a button “Sign up” and three fields – name, email, password
“Sign in screen” has a button “Sign in” and two fields – email, password

“Games screen” has a list of existed games (creation date, name, opponent name, grid size, require an action or not, and who won the game) and a button to create a new game

“New game screen” has fields: game name, grid size, current player mark, and an email of your opponent
“Grid screen” has cells and a button “all games”. Every cell can have a mark inside. It must be able to visually show the winning row.
“Leaderboard screen” contains a list of the 10 players' names with the most games won.
Important to create a clean and reusable structure and to not use external libraries.