import React from 'react';
import {  View, Text, Button } from 'react-native';


function HomePage ({navigation}){
    navigation.navigate
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello home</Text>
            <Button title="Go to detail page" onPress={ () => navigation.navigate('detail_page')}></Button>
        </View>
      );
}
