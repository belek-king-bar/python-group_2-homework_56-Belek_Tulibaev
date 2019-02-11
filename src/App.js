import React, {Component} from 'react';
import './App.css';
import Field from './components/Field/Field';
import Cell from './components/Field/Cell/Cell';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';


// pass cell variable to Cell.js*

const FIELD_SIZE = 6;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(), // an array, inside the array we have an object
            counter: 0,
            isWin: false
        };


    }


    generateCells = () => {
        let cells = [];
        let cellsCount = FIELD_SIZE ** 2;

        for (let i = 0; i < cellsCount; i++) {
            cells.push({open: false, hasItem: false})
        }

        let randomIndex = Math.floor(Math.random() * cellsCount);
        cells[randomIndex].hasItem = true;
        return cells;

    };

    openCell = (id) => {
        //check if you found an 'O'
        if (!this.state.isWin) {
            let cell = {...this.state.cells[id]};
            if (!cell.open) {
                cell.open = true;

                let cells = [...this.state.cells];
                cells[id] = cell;

                let state = {...this.state};
                state.cells = cells;
                state.counter = state.counter + 1;

                this.setState(state);

                // if you are found an element
                if (cells[id].hasItem) {

                    // pass is open as property to open cell, and change the state: (cells, counter, isWin)
                    cells[id] = cell;
                    let state = {...this.state};
                    state.cells = cells;
                    state.counter = state.counter + 1;
                    state.isWin = true;

                    this.setState(state);
                }
            }
        }
    };

    resetGame = () => {
        // unpacked state
        // change counter
        // close opened squares
        // set changed state

        let state = {...this.state};
        state.counter = 0;
        state.isWin = false; // to start the game from the beginning
        let i = 0;
        while (i < state.cells.length) {
            if (state.cells[i].open) {
                state.cells[i].open = false;
            }
            i++;
        }

        this.setState(state);

    };

    render() {
        return (
            <div className="container">
                <Field>
                    {this.state.cells.map((item, index) =>
                        <Cell
                            cell={item}
                            key={index}
                            click={() => this.openCell(index)}
                        />
                    )}
                </Field>
                <Counter
                    counter={this.state.counter}
                />
                {this.state.isWin ? <p className="win_text">You won, Congrats!</p> : null}
                <Button
                    gameReset={this.resetGame}
                />
            </div>
        );
    }
}

export default App;