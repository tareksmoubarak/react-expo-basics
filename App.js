import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({ name: 'Tarek', age: 40});
  const [people, setPeople] = useState([
    { name: 'Tarek', id: '1' },
    { name: 'Chadi', id: '2' },
    { name: 'Joseph', id: '3' },
    { name: 'Shaza', id: '4' },
    { name: 'Marita', id: '5' },
    { name: 'Samir', id: '6' },
    { name: 'Nada', id: '7' }
  ]);

  const clickHandler = () => {
    if (name == 'shaun'){
      setName('chun-1');
      setPerson({name: 'John', age: 23});
    } else {
      setName('shaun');
      setPerson({name: 'Tarek', age: 40});
    }
  }
  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    });
  }
  return (
    <React.Fragment>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.boldText}>Hello, World!</Text>
        </View>
        <View style={styles.body}>
          <Text>My name is {name}</Text>
          <Text>His name is {person.name}</Text>
          <Text>And His age is {person.age}</Text>
          <Text>Enter name:</Text>
          <TextInput
            // multiline
            // keyboardType='alphabetic'
            style={styles.input}
            placeholder="John Doe"
            onChangeText={(val) => setName(val)}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="update name" onPress={clickHandler}/>
        </View>
        <View>
          {/* { people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          }) } */}
          {/* { people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )) } */}
        </View>
      </View>
    </ScrollView>
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people} 
      renderItem={({item}) => (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    )}/>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10
  }
});
