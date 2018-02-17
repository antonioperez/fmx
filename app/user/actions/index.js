import {
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';


//USER FUNCTIONS

export function register(email, password, successCB, errorCB) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => successCB(user))
        .catch((error) => errorCB(error));
}

export const login = (email, password, successCB, errorCB) => {
    if (email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((firebaseUser) => {
                var user = firebaseUser.toJSON();
                if (successCB) {
                    successCB(user)
                }
            })
            .catch((error) => {
                if (errorCB) {
                    errorCB(error)
                }
            });
    }
}

export const FBLogin = async (successCB, errorCB) => {
    try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw new Error('User cancelled request');
        }

        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw new Error('Something went wrong obtaining the users access token');
        }

        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        const currentUser = await firebase.auth().signInWithCredential(credential);
        var user = currentUser.toJSON();
        if (successCB) {
            successCB(user)
        }
    } catch (error) {
        if (errorCB) {
            errorCB(error)
        }
    }
}

export function resetPassword(email, successCB, errorCB) {
    firebase.auth().sendPasswordResetEmail(email)
        .then((user) => successCB(user))
        .catch((error) => errorCB(error));
}

export function signOut(successCB, errorCB) {
    firebase.auth().signOut()
        .then(() => {
            if (successCB) successCB()
        })
        .catch((error) => {
            if (errorCB) errorCB(error)
        });
}

//get Firebase Data
export const listenForFirebase = (ref, successCB, errorCB) => {

    var currData = [];
    ref.on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            var val = data.val();
            currData.push({
                data: val,
                _key: data.key
            });
        });
        if (successCB) {
            successCB(currData);
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        if (errorCB) {
            errorCB(errorObject);
        }
    });

    return currData;
}