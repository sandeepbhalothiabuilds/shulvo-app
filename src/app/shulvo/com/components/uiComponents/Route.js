import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Route extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://localhost:3000/api/courses')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
      console.log('in Route');
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.id}, {item.name}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
