import { Platform } from "react-native"

// var second = 1000;
// var minute = second * 60;
// var hour = minute * 60;

export function userState(p) {


    p.useMemo(() => {
      try {
        if (Platform.OS !== 'ios') {
          p.Keyboard.removeAllListeners('keyboardDidShow')
          p.Keyboard.removeAllListeners('keyboardDidHide')
        }
      }
      catch (error) { }
    }, [])


}

