import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/PageOne';
import PageTwo from '../components/PageTwo';

const screens = {
  Home: {
    screen: Home,
  },
  PageTwo: {
    screen: PageTwo,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);