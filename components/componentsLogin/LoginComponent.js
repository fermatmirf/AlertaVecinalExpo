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
import { Alert, Button, Text, TextInput, View, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';

const axios = require('axios');

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      correo: '',
      password: '',
      vecinos: []
    };
  }
  // getVecinos = () => {
  //   return axios.get('http://192.168.100.2:1337/api/vecinos');
  // }
  onLogin() {
    const data = {
      correo: this.state.correo,
      password: this.state.password
    }
    axios.post('http://192.168.43.66:1337/api/vecinosLogIn', { data })
    .then(res => {
      const state = JSON.parse(res.data.success);
      console.log(res.data);
      this.setState({
        vecinos: res.data.data
      })
      
      
      if(state === true && res.data.data.length != 0){
        this.props.navigation.navigate('Alerta',vecinos = this.state.vecinos);
      }
      else{
          Alert.alert('No pudo registrarse, revise los campos', `${res.data.message}`);
      }
    });
    // const { correo, password } = this.state;
    // if(correo ==="rashid@gmail.com" && password==='123456'){
    // Alert.alert('¡Bienvenido! ', ` ${correo}`);
    // this.props.navigation.navigate('Index')
    // }
    // else {
    //   Alert.alert('Usuario incorrecto');
    // }
}
  componentDidMount(){
    // this.getVecinos()
    //   .then((Response) => {
    //     console.log(Response.data.data)

    //     this.setState({
    //       posts: Response.data.data
    //     });

    //   })
    //   .catch((err) => console.log(err));
  }
  render() {
    return (
      //<ImageBackground source={{uri:'https://images.unsplash.com/photo-1520987623799-101883d6585a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eeaaaca9030b75d5fe8dedacbb3d00e0&auto=format&fit=crop&w=314&q=80'}}style={styles.container}>
      <View style={styles.container} >
      <Image style={styles.logo} source={require("../../assets/logo.png")}/>
        <TextInput
          value={this.state.correo}
          onChangeText={(correo) => this.setState({ correo })}
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

       <TouchableHighlight
                        style={styles.button}
                        onPress={() => { this.props.navigation.navigate('SignUpScreen')}}>
                        <Text style={styles.textButton}>Registrate</Text>
       </TouchableHighlight>
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
 button: {
    backgroundColor: 'skyblue',
    
}

});