import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import { List } from './ListComponent';

const axios = require('axios');

export default class SignUpComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            nombre: '',
            apellido: '',
            dni: '',
            correo: '',
            password: '',
            passwordconfirm: '',
            direccion: ''
        }
    }
    changeNombre(nombre) {
        this.setState({ nombre })
    }
    changeApellido(apellido) {
        this.setState({ apellido })
    }
    changeDni(dni) {
        this.setState({ dni })
    }
    changeCorreo(correo) {
        this.setState({ correo })
    }
    changeContrasenia(password) {
        this.setState({ password })
    }
    changeConfirmarContrasenia(passwordconfirm) {
        this.setState({ passwordconfirm })
    }
    changeDireccion(direccion) {
        this.setState({ direccion })
    }
    buttonPressed() {
        const arrayData = [];
        const data = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            dni: this.state.dni,
            correo: this.state.correo,
            password: this.state.password,
            passwordconfirm: this.state.passwordconfirm,
            direccion: this.state.direccion
        }
        axios.post('http://192.168.43.66:1337/api/vecinos', { data })
        .then(res => {
          const state = JSON.parse(res.data.success);
          
          if(state === true){
            Alert.alert('¡Bienvenido, se ha registrado! ', ` ${data.nombre+" "+data.apellido}`);
            this.props.navigation.navigate('Index')
          }
          else{
              Alert.alert('No pudo registrarse, revise los campos', `${res.data.message}`);
          }
        });
        // if(data.nombre != null && data.apellido != null && data.dni != null && data.correoElectronico != null && data.contrasenia != null && data.confirmarContrasenia!= null && data.direccion != null ){
        //     arrayData.push(data);
        // try {
        //     AsyncStorage.getItem('database_vecinos').then((value) => {
        //         if (value !== null) {
        //             const d = JSON.parse(value);
        //             d.push(data)
        //             AsyncStorage.setItem('database_vecinos', JSON.stringify(d)).then(() => {
        //                 this.props.navigation.navigate('Index')
        //             })
        //         } else {
        //             AsyncStorage.setItem('database_vecinos', JSON.stringify(arrayData)).then(() => {
        //                 this.props.navigator.push({
        //                     title: 'prueba',
        //                     component: List
        //                 })
        //             })
        //         }
        //     })
            
        // } catch (err) {
        //     console.log(err)
        // }
        // Alert.alert('Cuenta creada satisfactoriamente')
        // }
        // else {
        //     Alert.alert('No dejar los campos vacios');
        // }
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        placeholder="Nombre"
                        value={this.state.nombre}
                        style={styles.inputs}
                        onChangeText={(nombre) => this.changeNombre(nombre)} />
                    <TextInput
                        placeholder="Apellido"
                        value={this.state.apellido}
                        style={styles.inputs}
                        onChangeText={(apellido) => this.changeApellido(apellido)} />
                    <TextInput
                        placeholder="DNI"
                        value={this.state.dni}
                        style={styles.inputs}
                        onChangeText={(dni) => this.changeDni(dni)} />
                    <TextInput
                        placeholder="Correo Electrónico"
                        value={this.state.correo}
                        style={styles.inputs}
                        onChangeText={(correo) => this.changeCorreo(correo)} />
                    <TextInput
                        placeholder="Contraseña"
                        value={this.state.password}
                        style={styles.inputs}
                        onChangeText={(password) => this.changeContrasenia(password)} />
                    <TextInput
                        placeholder="Confirmar Contraseña"
                        value={this.state.passwordconfirm}
                        style={styles.inputs}
                        onChangeText={(passwordconfirm) => this.changeConfirmarContrasenia(passwordconfirm)} />
                    <TextInput
                        placeholder="Dirección"
                        value={this.state.direccion}
                        style={styles.inputs}
                        onChangeText={(direccion) => this.changeDireccion(direccion)} />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.buttonPressed()}>
                        <Text style={styles.textButton}>Registrar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },

    inputs: {
        marginTop: 5,
        width: 300,
        height: 40,
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#d7eb5a',
    },

    button: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        paddingTop: 15,
        paddingBottom: 15
    },

    textButton: {
        textAlign: 'center',
        color: 'white',
    }

});


