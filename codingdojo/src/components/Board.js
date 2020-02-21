import React from 'react';
import {connect} from "react-redux";
import Timer from "./Timer";
import {addScore, resetTimer} from "../Store/reducers/actions";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.level = "";
        this.toFind = 0;
        this.width = 0;
        this.win = 0;
        this.reveled = -1;

        this.state = {
            board: [],
            timeStart: false,
            timer: false
        };

        this.baseState = this.state;
    }
    /**
     * Select the level before launch game
     */
    _selectLevel() {
        this.level = this.win === 0 ? document.getElementById('level').value : this.level;
        return this.level;
    }

    /**
     * Generate the board depending on the level
     * @param {String} level 
     */
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

    /**
     * Start the game
     * @param {object} event
     */
    _startGame(event){
        event.preventDefault();
        this.props.resetTimer();
        this.reveled = -1;
        this.toFind = 0;
        this.setState({...this.state , board : this._generateTable(this._selectLevel()), timeStart: true, timer: false});
    }

    /**
     * Start the timer
     */
    _loadTimer(){
        if(this.state.timeStart){
            return(
                <Timer />
            );
        }
    }

    /**
     * Check all cells
     * @param {object} event
     */

    _checkValid(event){
        event.preventDefault();

        if(!event.target.getAttribute('clicked', "true")) {
            let data = event.target.getAttribute('data');

            if (this.reveled === 0) {
                this.win += 1;
                this.setState(this.baseState);
                alert("Tu as gagné");
            }

            if (data === "true") {
                event.target.className = "yellow";
                this.reveled -= 1;
                console.log(this.reveled);
            } else {
                event.target.className = "red";

                if(this.win > 0){
                    this.addScore();
                }
                this._restartGame(event);
                alert("Tu as perdu");
            }

            event.target.setAttribute("clicked", "true");

            console.log(data);
        }
    }

    /**
     * Generate random cells for board
     * @param {*} number 
     * @param {*} min 
     * @param {*} max 
     */

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
        return caseToFind;
    }

    /**
     * Change the state of the game
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state){
        if (state.timer !== props.timers) {
            return {
                timer: true,
            }
        }
        return {
            timer: false,
        }
    }

    /**
     * Add score
     */
    addScore(){
        this.props.addScore({
            name: this.props.users,
            victory: this.win,
            level: this.level,
        })
    }
    
    /**
     * Restart the game
     * @param {object} event
     */
    _restartGame(event) {
        event.preventDefault();
        this.setState(this.baseState);
        this.win = 0;
    }

    render() {
        const {board} = this.state;
        const {timers} = this.props;
        return (
            <div>
                <h2 className="title"> Welcome {this.props.users} </h2>
                <p> Choose your level</p>
                {this.win === 0 &&
                    <select id="level">
                        <option value="EASY">Easy - 5x5</option>
                        <option value="MEDIUM">Medium - 8x8</option>
                        <option value="HARD">Hard - 10x10</option>
                    </select>
                }
                <button onClick = {event => this._startGame(event)}>Start Game</button>
                <button onClick = {event => this._restartGame(event)}>Restart</button>
                {this._loadTimer()}
                <table align="center"><tbody>

                {board.map((line, i) => (
                    <tr key={i}>
                        {timers === false ?
                                line.map((row, i) => (
                                    <td key={i} data={row ? 'true' : 'false'} className={row ? 'yellow' : 'red'}
                                    />
                                ))
                            :

                            line.map((row, i) => (
                                <td key={i} data={row ? 'true' : 'false'} className="black"
                                    onClick={event => this._checkValid(event)}/>
                            ))
                        }
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
        scores: state.scores,
        timers: state.timers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addScore: score => {
            dispatch(addScore(score))
        },
        resetTimer: () => {
            dispatch(resetTimer())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)
