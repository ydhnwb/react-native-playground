
import React from 'react';
const { View, StyleSheet, Text } = require("react-native")

const UserItem = ({ user }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{user.name}</Text>
        <Text>{user.email}</Text>
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
    },
    item: {
        flexDirection: "column",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
})

export default UserItem;