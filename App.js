import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./src/screens/Home"
import AddAnime from "./src/screens/AddAnime"
import Setting from "./src/screens/Setting"
import DetailAnime from "./src/screens/DetailAnime"
import { useEffect } from "react"
import { AppDefaultContext } from "./src/contexts/DefaultContext"

const App = () => {
  const Root = createStackNavigator()
  const ModalStack = createStackNavigator()
  
  const ModalScreen = () => {
    return (
      <ModalStack.Navigator initialRouteName="AddAnime" screenOptions={{ headerShown: false }} >
        <ModalStack.Screen name="AddAnime" component={AddAnime} />
      </ModalStack.Navigator>
    )
  }

  const SettingScreen = () => {
    return (
      <ModalStack.Navigator initialRouteName="SettingPage" screenOptions={{ headerShown: false }}>
        <ModalStack.Screen name="SettingPage" component={Setting} />
      </ModalStack.Navigator>
    )
  }
  
  const DetailAnimeScreen = ({route}) => {
    return (
      <ModalStack.Navigator initialRouteName="DetailAnimePage" screenOptions={{ headerShown: false }}>
        <ModalStack.Screen name="DetailAnimePage" initialParams={{ data: route.params.data }} component={DetailAnime} />
      </ModalStack.Navigator>
    )
  }
  return (
    <AppDefaultContext>
    <NavigationContainer>
      <Root.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Modal" component={ModalScreen} />
        <Root.Screen name="Setting" component={SettingScreen} />
        <Root.Screen name="DetailAnime" component={DetailAnimeScreen} />
      </Root.Navigator>
    </NavigationContainer>
    </AppDefaultContext>
  )
}

export default App