import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { WhiteSpace } from 'antd-mobile-rn';
import {Button} from 'react-native-elements';
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
                   
                <Button
                    style={styles.botonLogin}
                    backgroundColor= 'midnightblue'
                    large
                    icon={{ name: 'key', type: 'font-awesome' }}
                    title='INGRESAR' 
                    onPress= {() => { this.props.navigation.navigate('LoginScreen') }}
                    />
                <WhiteSpace size="lg" />    
                <Button
                    style={styles.botonLogin}
                    backgroundColor= 'midnightblue'
                    large
                    icon={{ name: 'sign-in', type: 'font-awesome' }}
                    title='REGISTRAR' 
                    onPress={() => { this.props.navigation.navigate('SignUpScreen') }}
                    />   

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