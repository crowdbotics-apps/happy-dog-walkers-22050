import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList163983Navigator from '../features/NotificationList163983/navigator';
import Settings163982Navigator from '../features/Settings163982/navigator';
import Settings163974Navigator from '../features/Settings163974/navigator';
import UserProfile163972Navigator from '../features/UserProfile163972/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList163983: { screen: NotificationList163983Navigator },
Settings163982: { screen: Settings163982Navigator },
Settings163974: { screen: Settings163974Navigator },
UserProfile163972: { screen: UserProfile163972Navigator },

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
