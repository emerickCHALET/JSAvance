import 'firebase/firestore';
import firebase from './firebase';


export default function StoreScore(name, number, turn){

    firebase.database().ref('scores/').push({
        name: name,
        number: number,
        turn: turn
    });
}

export function getScore(){

    firebase.database().ref('scores/').on('value',  (snapshot) =>{
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
            newState.push({
                name: items[item].name,
                number: items[item].number,
                turn: items[item].turn,
            });
        }

        console.log(newState);
        return newState;
    })
}

/* export function getNumber(){

    firebase.database().ref('scores/').on('child_added',  (snapshot) =>{
        console.log(snapshot.val().number);
        return snapshot.val().number;
    })
}

export function getTurn(){

    firebase.database().ref('scores/').on('child_added',  (snapshot) =>{
        console.log(snapshot.val().turn);
        return snapshot.val().turn;
    })
} */