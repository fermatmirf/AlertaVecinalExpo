import React from 'react';
import { View, ListView, FlatList, ListItem, Icon } from 'react-native'
import dataUserGroup from '../../mockData.json'

const data = JSON.stringify(dataUserGroup[0].grupos);

class GrupoListComponent extends React.Component {
    constructor(props) {
        super(props);
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})
    }
    componentDidMount(){
    this.setState ({
            dataSource: this.state.dataSource.cloneWithRows(data),
            usergroup: JSON.stringify(dataUserGroup),
            grupos: JSON.stringify(dataUserGroup[0].grupos),
        });
    }
   
    render() {
        return (
            <View>
                {console.log(data+"eeeeeee")
                }
             <ListView
             dataSource = { this.data }
             renderRow={(rowData) =>
                <View><Text>{rowData.nombre}</Text></View>

             }
             />
            </View>
        )
    }
}

export default GrupoListComponent;