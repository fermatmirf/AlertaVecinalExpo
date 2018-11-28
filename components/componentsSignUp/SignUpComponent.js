import React from 'react';
import { View, Button } from 'react-native';

class SignUpComponent extends React.Component{
    render(){
        return(
            <View>
                <Button title="REGISTRARSE"  onPress = { () => this.props.navigation.navigate('Index')} />
            </View>
        )
    }
}
export default SignUpComponent;