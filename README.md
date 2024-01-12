# `Life The Game`

Conway's Game of Life is a cellular automaton devised by mathematician John Conway. It is a zero-player game, meaning that its evolution is determined by its initial state, with no further input. The game consists of a grid of cells, each of which can be alive or dead. The cells evolve through generations based on simple rules.

## Live demo
https://ficus2904.github.io/Life-The-Game/

## Rules

1. **Underpopulation:** A live cell with fewer than two live neighbors dies.
2. **Survival:** A live cell with two or three live neighbors survives.
3. **Overpopulation:** A live cell with more than three live neighbors dies.
4. **Reproduction:** A dead cell with exactly three live neighbors becomes alive.

These rules create dynamic patterns, and the Game of Life is known for its emergent complexity. It has applications in various fields, including computer science, biology, and artificial life.


## Button Descriptions

### Start Button

The **Start** button initiates the simulation of Conway's Game of Life. Clicking this button triggers the evolution of the cells on the grid over time. The simulation continues until manually paused or reset.

### Pause Button

The **Pause** button halts the ongoing simulation. Clicking this button stops the evolution of cells on the grid, providing users with the ability to observe and analyze the current state of the simulation.

### Reset Button

The **Reset** button clears the grid and resets the iteration count. Clicking this button removes all live cells from the grid, effectively starting the simulation anew. It is useful for starting a fresh simulation or making adjustments to the grid configuration (including value in Size (rows) input).

### Random Button

The **Random** button generates a random configuration on the grid. Clicking this button sets a random percentage of cells to be initially alive. This feature allows users to explore different starting conditions and observe the unique patterns that emerge during the simulation.


## Input Descriptions

### Size Input

The **Size Input** allows users to customize the grid size by specifying the number of rows. Adjusting the value in this input field influences the dimensions of the grid, providing flexibility to explore different scales for the simulation. Reset button resize grid (or empty grid with Start button or for PC users push Enter).

### Speed Input

The **Speed Input** enables users to set the simulation speed in milliseconds. By modifying the value in this input field, users can control the rate at which cells evolve during the simulation. Faster speeds result in quicker iterations, while slower speeds allow for more detailed observation. User can pause iteration, change speed and continue iteration (start button) with new speed.

### Random Input

The **Random Input** allows users to define the percentage of initially alive cells when using the "Random" button. By adjusting the value in this input field, users can control the randomness of the initial grid configuration. A higher percentage leads to more densely populated initial states, while a lower percentage results in sparser configurations.



## About this Implementation

This project implements Conway's Game of Life as a web-based simulation. Users can interact with the grid by starting, pausing, resetting, and generating random configurations. The grid size, simulation speed, and initial random configuration are customizable through the user interface.

Feel free to explore and contribute to the development of this implementation. Enjoy the fascinating patterns that emerge from the simple rules of Conway's Game of Life!
