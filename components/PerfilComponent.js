import React from 'react';
import { View, Text, Button } from 'react-native';

class PerfilComponent extends React.Component {
    static navigationOptions = {
        title: 'Perfil',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Perfil</Text>
                <Button
                    title="Go to Alerta"
                    onPress={() => this.props.navigation.navigate('Alerta')}
                />
            </View>
        )
    }
}
export default PerfilComponent;