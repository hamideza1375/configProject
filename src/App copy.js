import React from "react";
import { Image, View, ScrollView, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/food/Home"
import { states, propTypes } from "./utils/context/contexts";
import { Div, Loading, Init } from "./Components/Html";
import { Layout, header } from "./other/Layout";
import _404 from "./other/404"
import ToastProvider, { Toast } from "./utils/toast";
import { userState } from "./state/userState";
import { foodState, home } from "./state/foodState";
import { adminState } from "./state/adminState";
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { rtl } from "./other/rtl"
rtl()
LogBox.ignoreAllLogs();

const Tab = createNativeStackNavigator()
const Food = () => {
  let icon = Platform.OS === 'ios' ? {headerLeft: header} : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  home(p)
  const ChangeStyle = (p.width > p.height) ? { marginBottom: 10, flex: 1 } : { flex: 1 }
  const _food = ({ navigation, route }) => new foodState({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
  const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props), _scrollView: (p) => <ScrollView style={[ChangeStyle, p.style]} {...p} contentContainerStyle={[{ flexGrow: 1, width: '100%', height: '100%' }, p.contentContainerStyle]} >{p.children}</ScrollView> })

  const _children=(Component,key)=>({children:(props) => 
  <Layout _key={key} {...props} {...p} >
    {p.showActivity && <Loading setshowActivity={p.setshowActivity} pos='absolute' top={15} time={900000} />}
   <Component {...props} {...p} {...reducer(props)} />
   </Layout>
   })

   let imageStyle
   if (allState.width <= 650) imageStyle = { width: allState.width, height: allState.width }
   if (allState.width > 650) imageStyle = { width: 600, height: 600 }

  return (
    allState.splash ?
      <Div style={{ width: '100%', height: Platform.OS === 'web' ? '100vh' : '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff' }} >
        <Image source={require('./assets/images/logo.jpg')} style={[{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', borderRadius: 5, marginTop: Platform.OS === 'ios' ? 50 : 0 }, imageStyle]} />
      </Div>
      :
      <>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' ,...icon}}} >
 
          <Tab.Group>
            <Tab.Screen initialParams={{ key: '' }} name="Home" options={{ title: 'home' }} {..._children(Home)} />
          </Tab.Group>

          <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
        </Tab.Navigator >
      </>
  )
}

 // propTypes
 propTypes(Home)


const linking = {
  prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/Home',
      ChildFood: 'ChildFood/:id',
      NotFound: '*'
    },
  },
};



let App
if (Platform.OS !== 'web') {
  App = () => {
    return (
      <NavigationContainer>
        <Food />
      </NavigationContainer>
    )
  }
}
else {
  App = () => {
    return (
      <NavigationContainer linking={Platform.OS === 'web' ? linking : null} >
        <View flex={1} style={{ minHeight: Platform.OS === 'web' ? '100vh' : null }} dir='rtl' >
          <Food />
        </View>
      </NavigationContainer>
    )
  }
}

export default App;



