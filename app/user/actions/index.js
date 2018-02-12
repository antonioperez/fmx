import React from 'react';
import firebase from 'react-native-firebase';



    //     Auth.auth().signIn(withEmail: email, password: pwd) { user, error in
            
    //         guard let user = user else {
    //             if error != nil {
    //                 Auth.auth().createUser(withEmail: email, password: pwd) { (user, error) in
    //                     if let error = error  {
    //                         showErrorAlert(view: self, title: "Login failed", msg: error.localizedDescription)
    //                     } else if let user = user {
    //                         user.sendEmailVerification(completion: { (error) in })
    //                     }
    //                 }
    //             }
    //             return;
    //         }
            
    //         let userData = [
    //             "provider": "email",
    //             "type" : self.userType
            
    //         ]
    //         UserService.instance.addProfile(uid: user.uid, user: userData)
    //         UserDefaults.standard.setValue(user.uid, forKey: KEY_UID)
    //         self.performSegue(withIdentifier: "user_views", sender: nil)
    //     }
    // } 
export const login = () => {
    alert("hi");
}


// @IBAction func fbBtnPressed(sender: AnyObject){
//     let loginManager = FBSDKLoginManager()
//     loginManager.logIn(withReadPermissions: ["email"], from: self, handler: { (result, error) in
//         if let error = error {
//              showErrorAlert(view: self, title: "Login failed", msg: error.localizedDescription)
//         } else if result!.isCancelled {
//             print("FBLogin cancelled")
//         } else {
//             let credential = FacebookAuthProvider.credential(withAccessToken: FBSDKAccessToken.current().tokenString)
//             Auth.auth().signIn(with: credential) { (user, error) in
//                 guard let user = user else {
//                     if let error = error  {
//                         showErrorAlert(view: self, title: "Login failed", msg: error.localizedDescription)
//                     }
//                      return;
//                 }
//                 let userData = [
//                     "provider": "facebook",
//                     "type" : self.userType
//                 ]
//                 UserService.instance.addProfile(uid: user.uid, user: userData)
//                 UserDefaults.standard.setValue(user.uid, forKey: KEY_UID)
//                 self.performSegue(withIdentifier: "user_views", sender: nil)
//             }
//         }
//     })
// }
export const FBLogin = () => {
    alert("hsi");
}