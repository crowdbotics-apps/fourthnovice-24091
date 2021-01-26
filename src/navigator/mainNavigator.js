import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile197075Navigator from '../features/UserProfile197075/navigator';
import Settings197074Navigator from '../features/Settings197074/navigator';
import Settings197072Navigator from '../features/Settings197072/navigator';
import SignIn2197070Navigator from '../features/SignIn2197070/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile197075: { screen: UserProfile197075Navigator },
Settings197074: { screen: Settings197074Navigator },
Settings197072: { screen: Settings197072Navigator },
SignIn2197070: { screen: SignIn2197070Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
