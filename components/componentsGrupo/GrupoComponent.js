import React from 'react';
import { Button, WhiteSpace } from 'antd-mobile-rn'
import { View, Text } from 'react-native';
class GrupoComponent extends React.Component {
    static navigationOptions = {
        title: 'GRUPOS',
        headerStyle: {
            backgroundColor: 'mediumblue',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
        },
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'blue',
            },
          }
    };
    render() {
        return (
            <View>
                {/* <Button
                    title="Crear Grupo"
                    onPress={() => this.props.navigation.navigate('CrearGrupo')}//vista de Rama
                />
                
                 <Button
                    title="Unirse a un Grupo"
                    onPress={() => this.props.navigation.navigate('CrearGrupo')}
                /> */}
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />

                <Button type="primary" size="large" onClick={() => { this.props.navigation.navigate('CrearGrupo') }}>Crear Grupo</Button>
                <WhiteSpace size="lg" />
                <Button type="primary" size="large" onClick={() => { this.props.navigation.navigate('CrearGrupo') }}>Unirse a un Grupo</Button>
            </View>
        )
    }
}
export default GrupoComponent;