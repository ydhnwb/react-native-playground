import React from 'react';
import { StyleSheet, View, StatusBar, Text, Button } from "react-native";

export default class DetailPage extends React.Component {
    constructor(props){
        this.state = {
            navigation: props.navigation
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#0097A7"/>
                <Button title="Go to home page" 
                onPress={() => this.state.navigation.navigate('home_page')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0097A7',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });