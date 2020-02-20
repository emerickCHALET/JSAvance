import React from 'react';
import {connect} from "react-redux";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.level = "";
        this.width = 0;
        /* this.ex = [
            [true, true, false, false, false],
            [false, true, true, false, false]
        ] */
        this.state = {
            ex1: []
        }
    }

    /* createTab() {
        let tab = [];
        for(let i = 0, n = 3; i < n ; i++) {
            let line = [];
            for(let i = 0, n = 5; i < n ; i++) {
                let random = Math.floor(Math.random() * 2);
                if (random == 1) {
                    line.push(true);
                } else {
                    line.push(false);
                }
            }
            tab.push(line);
        }
        console.log('tab', tab);
        return tab;
    }*/

    _selectLevel() {
        this.level = document.getElementById('level').value;
        return this.level;
    }

    _generateTable(level) {
        switch (level) {
            case "EASY":
                this.width = 5;
                break;
            case "MEDIUM":
                this.width = 12;
                break;
            case "HARD":
                this.width = 20;
                break;
            default:
                this.width = 4;
                break;
        }

        let tab = [];
        for(let i = 0, n = this.width; i < n ; i++) {
            let line = [];
            for(let i = 0, n = this.width; i < n ; i++) {
                let random = Math.floor(Math.random() * 2);
                if (random === 1) {
                    line.push(true);
                } else {
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
        this.setState({...this.state , ex1 : this._generateTable(this._selectLevel())});
        this._timer();
    }


    /*
    * TO DO : timer
    *   - Start timer for memorization (e.g. : 10s easy, 7s medium, 5s hard)
    *   - Start timer when game start ???
    */


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
        const {ex1} = this.state;
        return (
            <div>
            <h2> Welcome {this.props.users} </h2>
            <p> Choose your level</p>
            <select id="level" onChange = {event => this._startGame(event)}>
                <option value="EASY">Easy - 4x4</option>
                <option value="MEDIUM">Medium - 12x12</option>
                <option value="HARD">Hard - 20x20</option>
            </select>
                <div id="demo"/>
                <script type="text/javascript">

                </script>
               
                <table align="center"><tbody>
                {ex1.map((line, i) => (
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
    _timer() {
        // Set the date we're counting down to
        var countDownDate = new Date()
        countDownDate.setTime(new Date().setSeconds(30));


// Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);}

}


const mapStateToProps = state => {
    return {
        users: state.users,
        scores: state.scores
    }
};

export default connect(mapStateToProps)(Board)