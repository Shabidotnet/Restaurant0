import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'

import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import FoodCard from '../Components/FoodCard'
import dataArray from '../Data/data'
import icons from '../Icons'

const Home = ({ navigation }) => {

    const [data, setdata] = useState(dataArray);
    const [filteredData, setFilteredData] = useState(data)
    const [modalVisible, setModalVisible] = useState(false)
    const [type, setType] = useState('Meals for you')



    const handleSearch = (searchText) => {
        const filteredArray = data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filteredArray);
    };

    const handleType = (searchType) => {
        if (searchType === 'all') {
            setFilteredData(data)
            setModalVisible(false)
        } else if (searchType === 'best') {
            const filteredArray = dataArray.filter(item => item.rating > 4.0)
            setFilteredData(filteredArray);
            setModalVisible(false)
        } else if (searchType === 'Special') {
            const filteredArray = dataArray.filter(item => item.special === true)
            setFilteredData(filteredArray);
            setModalVisible(false)
        }
        else {
            const filteredArray = data.filter((item) =>
                item.type.toLowerCase() === searchType.toLowerCase());
            setFilteredData(filteredArray);
            setModalVisible(false)
        }
    };




    const renderItem = ({ item }) => {
        return <FoodCard item={item} onPress={() => navigation.navigate('FoodDetail', { data: item })} />;
    };

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={'black'} />
            <Header title={"Restaurant"}/>
            <SearchBar onSearch={handleSearch} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10 }}>
                <Text style={styles.header}>{type}</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={icons.more} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <Text
                            onPress={() => handleType('all')}
                            style={styles.modalText}
                        >{'No Filter'}</Text>
                        <Text
                            onPress={() => handleType('Special')}
                            style={styles.modalText}
                        >{'Specialities'}</Text>
                        <Text
                            onPress={() => handleType('best')}
                            style={styles.modalText}
                        >{'Best-Rating'}</Text>
                        <Text
                            onPress={() => handleType('NonVeg')}
                            style={styles.modalText}
                        >{'Non-Veg'}</Text>
                        <Text
                            onPress={() => handleType('Veg')}
                            style={styles.modalText}
                        >{'Veg'}</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8F9'
    },
    header: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',

    },

    modalContainer: {
        position: 'absolute',
        width: 130,
        height: 160,
        padding: 20,
        backgroundColor: 'black',
        right: 20,
        top: 165,
        borderRadius: 20,
        alignContent: 'center'
    },
    overlay: {
        flex: 1,
    },
    modalText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5
    }
})