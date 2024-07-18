import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/components/splashscreen';
import Onboardscreen from './src/components/onboard';
import Login from './src/components/login';
import Signup from './src/components/signup';
import SignupPage from './src/components/test';
import Home from './src/components/home';
import Johnchat from './src/components/JohnChat';
import Calls from './src/components/calls';
import Contacts from './src/components/contacts';
import Test from './src/components/test';
import Settings from './src/components/settings';
import Update from './src/components/update';
import Forgetpass from './src/components/forgetpass';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboard" component={Onboardscreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Forgetpass" component={Forgetpass} />
      <Stack.Screen name="Johnchat" component={Johnchat} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Calls" component={Calls} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Update" component={Update} />

    </Stack.Navigator>
  </NavigationContainer>
  // <Signup/>
  // <Forgetpass/>
  // <SignupPage/>
  // <Update/>
  // <Test/>
    // <Home/>
    // <Settings/>
    // <Johnchat/>
    // <Calls/>
    // <Contacts/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
