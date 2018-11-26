import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from 'expo'

class LogoTitle extends React.Component {
    render() {
        return (
            <Icon type="check" size="md" color="red" />
        );
    }
}

class AlertaComponent extends React.Component {
    static navigationOptions = {
        title: 'Home',
      };
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={styles.buttonAlerta}
                    onPress={this.onPress}

                >
                    <Text> ALERTA </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSospechoso}
                    onPress={this.onPress}

                >
                    <Text> SOSPECHOSO </Text>
                </TouchableOpacity>
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
        backgroundColor: 'orange',
        borderWidth:2,
        borderColor:'black',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:100,
    },
    buttonSospechoso: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'yellow',
        borderWidth:2,
        borderColor:'black',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:100,
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