import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import icons from '../Icons';

const SearchBar = ({ onSearch }) => {

  const handleSearch = (val) => {
    onSearch(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Type to Search"
          onChangeText={(val) => handleSearch(val)}
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    padding: 5,
    color: 'white'
  },
  icon:{
    width: 20,
     height: 20,
      tintColor: 'white'
  }
});

export default SearchBar;