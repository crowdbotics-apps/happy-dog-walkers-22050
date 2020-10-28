import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings164167Navigator from '../features/Settings164167/navigator';
import Settings164159Navigator from '../features/Settings164159/navigator';
import UserProfile164157Navigator from '../features/UserProfile164157/navigator';
import BlankScreen71164135Navigator from '../features/BlankScreen71164135/navigator';
import UserProfile164012Navigator from '../features/UserProfile164012/navigator';
import Tutorial164011Navigator from '../features/Tutorial164011/navigator';
import NotificationList163983Navigator from '../features/NotificationList163983/navigator';
import Settings163982Navigator from '../features/Settings163982/navigator';
import Settings163974Navigator from '../features/Settings163974/navigator';
import UserProfile163972Navigator from '../features/UserProfile163972/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings164167: { screen: Settings164167Navigator },
Settings164159: { screen: Settings164159Navigator },
UserProfile164157: { screen: UserProfile164157Navigator },
BlankScreen71164135: { screen: BlankScreen71164135Navigator },
UserProfile164012: { screen: UserProfile164012Navigator },
Tutorial164011: { screen: Tutorial164011Navigator },
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
