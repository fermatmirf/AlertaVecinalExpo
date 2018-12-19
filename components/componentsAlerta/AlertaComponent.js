import React from 'react';
import { View, Text, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import SocketIOClient from 'socket.io-client';
var alertasArray = [];
var i = 0;

class AlertaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: SocketIOClient('http://192.168.43.66:8080'),
            alertas : alertasArray
        }
        i=1;
        this.state.socket.on('alertas', function (alertas) {
            if( i != 0 ){
                Alert.alert('Se recibio un alerta');
            }
            alertasArray = alertas;
            console.log(alertasArray);
        })
        
    }

    static navigationOptions = {
        title: 'ALERTAS!',
        headerStyle: {
            backgroundColor: 'mediumblue',
        },
        headerTitleStyle: {
            fontWeight: '700',
            color: 'white',

        },
    };
    alertaEnviada() {
        const alerta = {
            nombre: "Fer",
            latitud: "-26.8188634",
            longitud: "-65.19462"
        }
        this.state.socket.emit('new-alerta', alerta);
        
        Alert.alert('Alerta enviada!!');
        console.log("Se ha enviado una alerta");
    }
    alertaRecibida() {
       
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={styles.buttonAlerta}
                    onPress={this.alertaEnviada.bind(this)}

                >
                    <Text> ALERTA </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSospechoso}
                    onPress={this.onPress}

                >
                    <Text> SOSPECHOSO </Text>
                </TouchableOpacity>

                <List>
                    {
                        alertasArray.map((alerta) => (
                            <ListItem
                                key={alerta.nombre}
                                title={alerta.nombre}
                                subtitle = {alerta.latitud+' '+alerta.longitud}
                            />
                        ))
                    }
                </List>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    buttonAlerta: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'transparent',
        justifyContent: 'center',
        width: 125,
        height: 125,
        borderRadius: 100,
    },
    buttonSospechoso: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: 'transparent',
        justifyContent: 'center',
        width: 125,
        height: 125,
        borderRadius: 100,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})
export default AlertaComponent;