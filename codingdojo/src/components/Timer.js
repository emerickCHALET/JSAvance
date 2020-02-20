import React from 'react';
import { connect } from 'react-redux';
import {addTimer} from "../Store/reducers/actions";

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 1,
            finish: false
        };
        this.baseState = this.state;

    }


    addTimer() {
        let finish = this.setState({...this.state , finish: true});
        this.props.addTimer(finish);
        console.log(this.state.finish);
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.addTimer();
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.myInterval);
        this.setState(this.baseState);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTimer: timer => {
            dispatch(addTimer(timer))
        }
    };
};


export default connect(null, mapDispatchToProps)(Timer)
