import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeComponent from './components/componentsWelcome/WelcomeComponent';
import LoginComponent from './components/componentsLogin/LoginComponent';
import SignUpComponent from './components/componentsSignUp/SignUpComponent';
import GrupoComponent from './components/componentsGrupo/GrupoComponent';
import GrupoCrearComponent from './components/componentsGrupo/GrupoCrearComponent';
import AlertaComponent from './components/componentsAlerta/AlertaComponent';
import PerfilComponent from './components/componentsPerfil/PerfilComponent';


const GrupoStack = createStackNavigator({
  HomeGrupo: GrupoComponent,
  CrearGrupo: GrupoCrearComponent
});

const AlertaStack = createStackNavigator({
  HomeAlerta: AlertaComponent
});

const PerfilStack = createStackNavigator({
  HomePerfil: PerfilComponent
});
const WelcomeStack = createStackNavigator({
  WelcomeScreen: WelcomeComponent,
  LoginScreen: LoginComponent,
  SignUpScreen: SignUpComponent,
});


 const AppNavigator = createBottomTabNavigator(
   {
     Alerta: AlertaStack,
     Grupo: GrupoStack,
     Perfil: PerfilStack,
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
           draweI
         }
         if (routeName === 'Grupo') {
           iconName = `ios-options${focused ? '' : '-outline'}`;
         }
         if (routeName === 'Perfil') {
           iconName = `ios-options${focused ? '' : '-outline'}`;
         }
          //You can return any component that you like here! We usually use an
          //icon component from react-native-vector-icons
         return <Ionicons name={iconName} size={25} color={tintColor} />;
       },
     }),
     tabBarPosition: 'bottom',
     tabBarOptions: {
       activeTintColor: 'tomato',
       inactiveTintColor: 'gray',
     },
     animationEnabled: true,
     swipeEnabled: true,
   }
 );

 export default createAppContainer(createSwitchNavigator(
  {
    Welcome: WelcomeStack,
    Index: AppNavigator,
  },
  {
    initialRouteName: 'Welcome',
  }
));

// const AppStackNavigator = new StackNavigator ({
//   WelcomeScreen: { screen: WelcomeComponent},
//   LoginScreen: {screen: LoginComponent},
//   SignUpScreen: {screen: SignUpComponent},
//   // DrawerNavigator : { screen: DrawerNavigator, navigationOptions: {
//   //   header: 'none'
//   // }}
// });

// export default AppStackNavigator;

