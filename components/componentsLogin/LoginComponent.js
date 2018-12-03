// import React from 'react';
// import { View, TextInput } from 'react-native';

// import { FormLabel, Button, FormInput, FormValidationMessage } from 'react-native-elements';
// import styles from '../../styles/styles';
// class LoginComponent extends React.Component {
//     render() {
//         return (
//             <View>
//                 <FormLabel>Usuario:</FormLabel>
//                 <FormInput onChangeText={console.log("Eeee eeee")} />
//                 <FormValidationMessage>Ingrese el nombre de usuario:</FormValidationMessage>
//                 <FormLabel>Contraseña:</FormLabel>
//                 <FormInput onChangeText={console.log("Eeee eeee")} />
//                 <FormValidationMessage>Ingrese la contraseña:</FormValidationMessage>
               
//                 <Button
//                     style={styles.botonLogin}
//                     backgroundColor= 'midnightblue'
//                     large
//                     onPress={()=> {this.props.navigation.navigate('Index')}}
//                     icon={{ name: 'key', type: 'font-awesome' }}
//                     title='INGRESAR' />
//             </View>
//         )
//     }
// }
// export default LoginComponent;
import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
    if(username ==="rashid@gmail.com" && password==='123456'){
    Alert.alert('¡Bienvenido! ', ` ${username}`);
    this.props.navigation.navigate('Index')

  }
  else {
    Alert.alert('Usuario incorrecto');
  }
}
  onNada(){

  }

  render() {
    return (
      //<ImageBackground source={{uri:'https://images.unsplash.com/photo-1520987623799-101883d6585a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eeaaaca9030b75d5fe8dedacbb3d00e0&auto=format&fit=crop&w=314&q=80'}}style={styles.container}>
      <View style={styles.container} >
      <Image style={styles.logo} source={require("../../assets/logo.png")}/>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Correo electronico'}
          style={styles.input} 
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'**********'}
          secureTextEntry={true}
          style={styles.input2}
        />
        
        
        <Button  style={styles.botonIngresar}
          title={'Ingresar'}
          
          onPress={this.onLogin.bind(this)}
        />

        <Image style={styles.icon} source={require("../../assets/fbg.png")}/>

        <Button
            onPress= {() => { this.props.navigation.navigate('Index')}}
            title = "Registrate"
        ></Button>

      </View>
      
      //</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 35,
    width: 300,
    height: 44,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#d7eb5a',
    
  },

  input2: {
    marginTop: 10,
    width: 300,
    height: 44,
    padding: 10,
    backgroundColor: '#d7eb5a',
    borderRadius: 8,
    marginBottom: 20,
  },

  textoRegistrate: {
    marginTop:30,
    textDecorationLine: 'underline',
    color: "grey",
  },
  botonIngresar:{
    marginTop: 30,
    width: 300,
    height: 40,
    marginBottom:20,
  },

  logo:{
    marginBottom: 2,
    marginTop: 20
 },
 
 icon:{
   marginTop:25,
    width: 160,
    height: 75,
 },

});