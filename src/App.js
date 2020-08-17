import React, { useEffect, useState } from 'react';
import UserItem from './components/user_item';
import { Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';


const App = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e));
      setUsers(response)
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <UserItem user={item} />
  );

  return (
    <SafeAreaView>
      {
        users !== undefined ? <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={user => user.name}></FlatList> : <Text>Empty</Text>
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})


export default App;