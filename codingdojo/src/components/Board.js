import React from 'react';
import {connect} from "react-redux";
import Timer from "./Timer";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.level = "";
        this.toFind = 0;
        this.width = 0;
        this.win = 0;
        this.reveled = -1;
        this.timerStart = false;
        this.state = {
            board: []
        };
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
                   this.reveled += 1;
                    console.log(this.reveled);
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
        this.timerStart = true;

        this.state.board.map((items ) => {
            items.className = "black";
       })
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

    _checkValid(event){
        event.preventDefault();
        let data = event.target.getAttribute('data');

        if(this.reveled === 0){
            // Tu as gagné
            console.log("Tu as gagné");
            this.win += 1;

            // call aux scores en envoyant win + level + name du player
        }

        if(data === "true"){
            event.target.className = "yellow";
            this.reveled -= 1;
            console.log(this.reveled);
        }
        else{
            event.target.className = "red";
            // Tu as perdu
        }

        console.log(data);
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
                {this.timerStart &&
                  <Timer />
                }
                <table align="center"><tbody>
                {board.map((line, i) => (
                    <tr key={i}>
                        {line.map((row, i) => (
                            <td key={i} data = {row ? 'true' : 'false'} className={row ? 'yellow' : 'red'} onClick={event => this._checkValid(event)}/>
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