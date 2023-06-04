import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../Images'
const FoodCard = ({ item,onPress }) => {
    return (
        <TouchableOpacity style={styles.card}  onPress={onPress}>
            <Image
                source={item.image}
                style={styles.img}
            />
            <View style={styles.price}>
                <Text style={{ color: 'white' }}>{"$ "+item.price}</Text>
            </View>
            <Text style={styles.cardTextN}>{item.name}</Text>
            <Text style={styles.cardTextD}>{item.detail}</Text>

        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        width: '45%',
        height: 230,
        margin: 10,
        borderRadius: 20
    },
    img: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },

    cardTextN: {
        fontSize: 18,
        marginLeft: 10,
        color: 'black'
    },
    cardTextD: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
        marginTop: 5
    },
    price: {
        position: 'absolute',
        right: 10,
        top: 5,
        backgroundColor: 'black',
        width: 80,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})