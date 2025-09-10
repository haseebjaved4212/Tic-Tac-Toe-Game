# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. This project features a sleek UI, dark/light theme toggle, animated transitions, and a fully functional game logic with win/draw detection.

## Features

- **Classic Tic Tac Toe gameplay**: Two players (X and O) take turns marking spaces in a 3×3 grid.
- **Win and Draw Detection**: Instantly detects and highlights a win or draw situation.
- **Animated UI**: Smooth transitions and animations for a polished experience.
- **Theme Toggle**: Switch between light and dark modes with a single click.
- **Responsive Design**: Works well on desktop and mobile devices.
- **Restart Button**: Quickly reset the game board to play again.


## Logic Flow

```

+--------------------+
|  Game Starts       |
+--------------------+
        |
        v
+--------------------+
|  Player X's Turn   |
+--------------------+
        |
        v
+-----------------------------+
|  Player Clicks a Cell       |
+-----------------------------+
        |
        v
+-----------------------------+
|  Check If Cell Is Empty     |
|  & Game is Active           |
+-----------------------------+
        |      |
      Yes      No
        |      |
        v      v
+-----------------------------+
|  Update Board               |
|  with Current Player        |
+-----------------------------+
        |
        v
+-----------------------------+
|  Check for Win Condition    |
+-----------------------------+
        |      |
      Yes      No
        |      |
        v      |
+-----------------------------+
|  Declare Winner             |
|  Disable Further Clicks     |
+-----------------------------+
        |
        v
+-----------------------------+
|  Check for Draw Condition   |
+-----------------------------+
        |      |
      Yes      No
        |      |
        v      |
+-----------------------------+
|  Declare Draw               |
|  Disable Further Clicks     |
+-----------------------------+
        |
        v
+-----------------------------+
|  Switch Player (X <-> O)    |
+-----------------------------+
        |
        v
+-----------------------------+
|  Update Status Message      |
+-----------------------------+
        |
        v
+-----------------------------+
|  Continue Playing           |
+-----------------------------+
```









## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- No installation or dependencies required

### Running the Game
1. **Clone or Download** this repository to your local machine.
2. **Open** `index.html` in your preferred web browser.

That’s it! You can now play Tic Tac Toe.

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS styles for layout, theme, and animations
├── script.js       # JavaScript game logic and interactivity
```

## How to Play

- The game board consists of 9 cells arranged in a 3x3 grid.
- Players take turns clicking on empty cells to place their mark (X or O).
- The first player to align three marks horizontally, vertically, or diagonally wins.
- If all cells are filled without a winner, the game ends in a draw.
- Click the **Restart Game** button to play again.
- Use the **theme toggle** button (🌙/☀️) in the header to switch between dark and light modes.

## Customization

- **Styling**: Modify `styles.css` to change colors, fonts, or animations.
- **Game Logic**: Enhance `script.js` to add features like score tracking, AI opponent, or sound effects.

## Credits

- Developed by [Hasee Javed]
- Inspired by classic Tic Tac Toe and modern web design best practices.

## License

This project is open-source and free to use, modify, and distribute.

---

## DEMO 

[ Play Game Here ](https://haseebjaved4212.github.io/Tic-Tac-Toe-Game/)
---

 Enjoy playing and feel free to customize or contribute! 
