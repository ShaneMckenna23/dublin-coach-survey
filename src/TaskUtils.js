import * as firebase from 'firebase';
import Actions from './TaskActions.js'

export function saveData(data){
    firebase.database().ref(data.ref).push(data.survey);
}

export function readData(){
    firebase.database().ref().on('value', function(snapshot) {
        Actions.updateResults(snapshot.val())
    });
}

