import 'firebase/firestore';
import firebase from './firebase';


export default function StoreScore(name, number, turn){

    // const scoreKey = this.scores.push().key;

    firebase.database().ref('scores/').push({
        name: name,
        number: number,
        turn: turn
    });
}
