import React from 'react';
import {connect} from "react-redux";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.level = "";
        this.toFind = 0;
        this.width = 0;
        this.state = {
            board: []
        }
    }

    _selectLevel() {
        this.level = document.getElementById('level').value;
        return this.level;
    }

    _generateTable(level) {
        switch (level) {
            case "EASY":
                this.width = 5;
                this.toFind = 6;
                break;
            case "MEDIUM":
                this.width = 8;
                this.toFind = 10;
                break;
            case "HARD":
                this.width = 10;
                this.toFind = 12;
                break;
            default:
                this.width = 5;
                this.toFind = 6;
                break;
        }

        let caseToFind = this._caseToFind(this.toFind, 0, this.width * this.width);

        let tab = [];
        for(let i = 0, n = this.width; i < n ; i++) {
            let line = [];
            for(let i = 0, n = this.width; i < n ; i++) {
                let random = Math.floor(Math.random() * caseToFind.length);
                if (random === 1) {
                    line.push(true);
                }
                else{
                    line.push(false);
                }
            }
            tab.push(line);
        }
        console.log('tab', tab);
        return tab;
    }

   _startGame(event){
        event.preventDefault();
        this.setState({...this.state , board : this._generateTable(this._selectLevel())});
    }

    _caseToFind(number, min, max) {
        let caseToFind = [];

        for (let i = 0; i < number; i++) {

            min = Math.ceil(min);
            max = Math.floor(max);
            let minRow = Math.floor(Math.random() * (max - min)) + min;
            let minCol = Math.floor(Math.random() * (max - min)) + min;
            while (caseToFind.indexOf(minRow + minCol) !== -1 && caseToFind.length < number) {
                minRow = Math.floor(Math.random() * (max - min)) + min;
                minCol = Math.floor(Math.random() * (max - min)) + min;
            }
            caseToFind.push(minRow + minCol);
        }
        console.log(caseToFind);
        return caseToFind;
    }


    /*
    * TO DO : timer
    *   - Start timer for memorization (e.g. : 10s easy, 7s medium, 5s hard)
    *   - Start timer when game start ???
    */

    _timer() {

    }

    /*
    * TO DO : add score
    * 
    * 
    */

    addScore(){
        this.props.addScore({
            name: this.props.users,

        })
    }


    render() {
        const {board} = this.state;
        return (
            <div>
                <h2> Welcome {this.props.users} </h2>
                <p> Choose your level</p>
                <select id="level">
                    <option value="EASY">Easy - 5x5</option>
                    <option value="MEDIUM">Medium - 8x8</option>
                    <option value="HARD">Hard - 10x10</option>
                </select>
                <button onClick = {event => this._startGame(event)}>Start Game</button>
                <p> You have 00:00 to memorize</p>
                <table align="center"><tbody>
                {board.map((line, i) => (
                    <tr key={i}>
                        {line.map((row, i) => (
                            <td key={i} className={row ? 'yellow' : 'red'}/>
                        ))}
                    </tr>
                ))}
                </tbody></table>
            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users,
        scores: state.scores
    }
};

export default connect(mapStateToProps)(Board)