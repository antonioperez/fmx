import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
      flex: 1,
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    center: {
      alignSelf: 'center',
    },
    whiteText: {
      color: "white",
    },
    clearButton: {
      backgroundColor: 'transparent', 
      borderRadius: 10,  
      borderColor: "#fff",
      borderWidth: 1,
      marginTop: 30,
      marginBottom: 20
    }
  });
