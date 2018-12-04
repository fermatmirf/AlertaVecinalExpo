import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import { List } from './ListComponent';

export default class SignUpComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            nombre: '',
            apellido: '',
            dni: '',
            correoElectronico: '',
            contrasenia: '',
            confirmarContrasenia: '',
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
    changeCorreoElectronico(correoElectronico) {
        this.setState({ correoElectronico })
    }
    changeContrasenia(contrasenia) {
        this.setState({ contrasenia })
    }
    changeConfirmarContrasenia(confirmarContrasenia) {
        this.setState({ confirmarContrasenia })
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
            correoElectronico: this.state.correoElectronico,
            contrasenia: this.state.contrasenia,
            confirmarContrasenia: this.state.confirmarContrasenia,
            direccion: this.state.direccion
        }
        if(data.nombre != null && data.apellido != null && data.dni != null && data.correoElectronico != null && data.contrasenia != null && data.confirmarContrasenia!= null && data.direccion != null ){
            arrayData.push(data);
        try {
            AsyncStorage.getItem('database_vecinos').then((value) => {
                if (value !== null) {
                    const d = JSON.parse(value);
                    d.push(data)
                    AsyncStorage.setItem('database_vecinos', JSON.stringify(d)).then(() => {
                        this.props.navigation.navigate('Index')
                    })
                } else {
                    AsyncStorage.setItem('database_vecinos', JSON.stringify(arrayData)).then(() => {
                        this.props.navigator.push({
                            title: 'prueba',
                            component: List
                        })
                    })
                }
            })
            
        } catch (err) {
            console.log(err)
        }
        Alert.alert('Cuenta creada satisfactoriamente')
        }
        else {
            Alert.alert('No dejar los campos vacios');
        }
        
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
                        value={this.state.correoElectronico}
                        style={styles.inputs}
                        onChangeText={(correoElectronico) => this.changeCorreoElectronico(correoElectronico)} />
                    <TextInput
                        placeholder="Contraseña"
                        value={this.state.contrasenia}
                        style={styles.inputs}
                        onChangeText={(contrasenia) => this.changeContrasenia(contrasenia)} />
                    <TextInput
                        placeholder="Confirmar Contraseña"
                        value={this.state.confirmarContrasenia}
                        style={styles.inputs}
                        onChangeText={(confirmarContrasenia) => this.changeConfirmarContrasenia(confirmarContrasenia)} />
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


