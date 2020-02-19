import 'firebase/firestore';
import firebase from './firebase';

export default function StoreScore(name, number, turn){

    firebase.database().ref('scores/').push({
        name: name,
        number: number,
        turn: turn
    });
}
