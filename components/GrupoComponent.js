import React from 'react';
import { View, Text, Button } from 'react-native';
class GrupoComponent extends React.Component {
    static navigationOptions = {
        title: 'Grupo',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Perfil</Text>
                <Button
                    title="Go to Perfil"
                    onPress={() => this.props.navigation.navigate('Perfil')}
                />
            </View>
        )
    }
}
export default GrupoComponent;