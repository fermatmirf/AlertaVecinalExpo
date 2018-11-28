import React from 'react';
import {Button} from 'antd-mobile-rn';
import {View} from 'react-native';

class LoginComponent extends React.Component{
    render(){
        return(
            <View>
                <Button type="primary" size="large" onClick={() => { this.props.navigation.navigate('Index') }}>INGRESAR</Button>
            </View>
        )
    }
}
export default LoginComponent;