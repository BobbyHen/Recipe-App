import React, {Component} from 'react';
import firebase from 'firebase';

export default class DatabaseConnect extends Component {
 

  componentWillMount(){
    const firebaseConfig = {
      // Database connection properties go here
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
