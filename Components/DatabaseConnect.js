import React, {Component} from 'react';
import firebase from 'firebase';

export default class DatabaseConnect extends Component {
 

  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyBTLwAIomLv6Jd9gWtssUMHsL4Ic0M8eY4",
      authDomain: "recipedatabase-4b552.firebaseapp.com",
      databaseURL: "https://recipedatabase-4b552.firebaseio.com",
      projectId: "recipedatabase-4b552",
      storageBucket: "recipedatabase-4b552.appspot.com",
      messagingSenderId: "794972276386",
      appId: "1:794972276386:web:ff7a72d43b675931"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref('recipe/003').set({
      dish: 'Lasagna',
      discription: "Want to know how to make lasagna for a casual holiday meal? You can't go wrong with this deliciously rich meat lasagna recipe. My grown sons and daughter-in-law request it for their birthdays, too. —Pam Thompson, Girard, Illinois"
    }
    
    ).then(() => {
      console.log('INSERTED');
    }).catch((error) => {
      console.log('ERROR')
    });

  }

  render() {
    return (
      ''
    );
  }
}