import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, WingBlank } from 'antd-mobile-rn';

class PerfilComponent extends React.Component {
    static navigationOptions = {
        title: 'PERFIL',
        headerStyle: {
            backgroundColor: 'mediumblue',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',

        },

    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                
            </View>
        )
    }
}
export default PerfilComponent;