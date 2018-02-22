import { StyleSheet } from 'react-native';

const lightTheme = ['#6651c1', '#8162cb', '#946ed1'];
const darkTheme = ["#000", "#1d0c34"];

export const globalThemes = {
  "light" : lightTheme,
  'dark' : darkTheme
}

export const ACTIVE_THEME = globalThemes.dark;

export const globalStyles = StyleSheet.create({
    background: {
      flex: 1,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    alignCenter: {
      alignSelf: 'center',
    },
    alignLeft: {
      alignSelf: 'flex-start',
      marginLeft: 20,
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
    },
    buttonCircle: {
      alignItems:'center',
      justifyContent:'center',
      width:60,
      height:60,
      borderRadius:100,
    },
    row : {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
