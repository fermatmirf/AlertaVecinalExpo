import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation';
import AlertaComponent from './components/AlertaComponent';
import GrupoComponent from './components/GrupoComponent';
import PerfilComponent from './components/PerfilComponent';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import Expo from 'expo';  // <--- include this line

const AppNavigator = createBottomTabNavigator(
  {
    Alerta: {
      screen: AlertaComponent,
     
    },

    Grupo: {
      screen: GrupoComponent,
    },
    Perfil: {
      screen: PerfilComponent,
    }
  },
  {
    initialRouteName: "Alerta"
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Alerta') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        if (routeName === 'Grupo') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        if (routeName === 'Perfil') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);


const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
