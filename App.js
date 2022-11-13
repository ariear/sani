import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./src/screens/Home"
import AddAnime from "./src/screens/AddAnime"

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

  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Modal" component={ModalScreen} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default App