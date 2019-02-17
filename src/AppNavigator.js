import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AuthScreen from './screens/Auth/Auth';
//import Settings from './containers/settings';


//A StackNavigator works exactly like a call stack or a stack of dishes.
//Each screen we navigate to is pushed to the top of the stack, and each time we hit the back button, this screen pops off the top of the stack.
const AppNavigator = createBottomTabNavigator({
  LoginTab: AuthScreen,
  SettingTab: AuthScreen
});

export default createAppContainer(AppNavigator);
