import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, WhiteSpace } from 'antd-mobile-rn'

class WelcomeComponent extends React.Component {

    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={require('./logo.png')}
                />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />

                <Button type="primary" size="large" onClick={() => { this.props.navigation.navigate('LoginScreen') }}>INGRESAR</Button>
                <WhiteSpace size="lg" />
                <Button type="primary" size="large" onClick={() => { this.props.navigation.navigate('SignUpScreen') }}>REGISTRARSE</Button>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    logo: {
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 125,
    }
})
export default WelcomeComponent;