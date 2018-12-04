import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, TouchableHighlight } from 'react-native';


export default class GrupoFormComponent extends React.Component {
    constructor(){
        super()

        this.state ={
            nombre: '',
            ubicacion:'',
        }
    }
    changeNombre(nombre){
        this.setState({nombre})
    }
    changeUbicacion(ubicacion){
        this.setState({ubicacion})
    }       
    buttonPressed(){
        if(this.state.nombre){
            if(this.props.texto != "Waiting.."){
                if(this.props.texto1 != "Waiting.."){
                    alert("Grupo "+ this.state.nombre + " correctamente creado")
                }else{
                    alert("Problemas con la información de ubicación")

            }
        
        }else{
            alert("Problemas con la información de ubicación")

        }
        }else{
            alert("Es necesario que ingrese el nombre del grupo para continuar")}
    }
    render(){
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.title}>Crear un nuevo grupo</Text>
            <Text>Nombre del grupo</Text>
            <TextInput
            style={styles.input}
            placeholder="Nombre"
            ref="name"
            value={this.state.nombre}
            onChangeText={(nombre) => this.changeNombre(nombre)} />
        <Text>Ubicación</Text>
        <Text>Longitud: {this.props.texto}</Text>
        <Text>Latitud: {this.props.texto1}</Text>
        <TouchableHighlight style={styles.button}
        onPress={() => this.buttonPressed()}
        >
            <Text style={styles.textButton}>Crear</Text>
        </TouchableHighlight>
        </View>
        )
            
        
    }
}

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#F5FCFF',
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 30
        },
        title:{
            textAlign: 'center',
            fontSize: 18,
            marginBottom: 5
        },
        container1:{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        button:{
            backgroundColor: 'skyblue',
            paddingTop: 5,
            paddingBottom: 15,
            width:200,
            height:40
        },
        textButton:{
            textAlign: 'center',
            color: 'white',
            fontSize: 22
        },
        input:{
            marginTop: 20,
            width: 300,
            height: 44,
            padding: 10,
            borderRadius: 8,
            backgroundColor: '#d7eb5a',
        },
    })