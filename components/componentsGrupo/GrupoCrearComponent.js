import React from 'react';
import {View,Text} from 'react-native';
import GrupoListComponent from './GrupoListComponent';

class GrupoCrearComponent extends React.Component{
    render(){
        return(
            <View>
                <Text>La concha de tu madre allboys</Text>
                <GrupoListComponent/>
            </View>
        )
    }

}

export default GrupoCrearComponent;