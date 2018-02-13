import {
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export const login = (email, password, callback, errorCallback) => {
    if (email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
                var user = firebaseUser.toJSON();
                if (callback){
                    callback(user)
                }
            })
            .catch(function (error) {
                if (errorCallback){
                    errorCallback(error)
                }
            });
    }
}

export const FBLogin = async (callback, errorCallback) => {
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
        if (callback) {
            callback(user)
        }
    } catch (error) {
        if (errorCallback) {
            errorCallback(error)
        }
    }
}