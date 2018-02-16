import { StyleSheet } from 'react-native';

const lightTheme = ['#6651c1', '#8162cb', '#946ed1'];
const darkTheme = ["#000", "#1d0c34"];

export const globalThemes = {
  "light" : lightTheme,
  'dark' : darkTheme
}

export const globalStyles = StyleSheet.create({
    background: {
      flex: 1,
    },
    centerContainer: {
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
      marginTop: 10,
      marginBottom: 10
    }
  });
