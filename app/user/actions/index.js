import {
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export const login = (email, password) => {
    if (email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
                let user = firebaseUser.toJSON();

                alert(user.email);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
}

export const FBLogin = async () => {
    try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw new Error('User cancelled request');
        }

        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

        // get the access token
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }

        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

        // login with credential
        const currentUser = await firebase.auth().signInWithCredential(credential);

        console.info(JSON.stringify(currentUser.toJSON()))
    } catch (e) {
        console.error(e);
    }
}