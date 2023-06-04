import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Header from '../Components/Header'
import images from '../Images'
import icons from '../Icons'
import dataArray from '../Data/data'

const FoodDetail = ({ route,navigation }) => {
  const { data } = route.params;
  const [related, setRelated] = useState(dataArray)
  const [filteredData, setFilteredData] = useState('')

  useEffect(() => {
    const filteredArray = dataArray.filter(item => item.type === data.type)
    setFilteredData(filteredArray);
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>

        <Image
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.cardTextN}>{item.name}</Text>
        <Text style={styles.cardTextD}>{item.detail}</Text>

      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'black'} />
      <Header title={'Restaurant'} onPress={()=>navigation.goBack()}/>
      <ScrollView>
      <View style={styles.subContainer}>
        <View style={styles.itemImage}>

          <Image source={data.image} style={styles.img} />
        </View>
        <View style={styles.price}>
          <Text style={{ color: 'white' }}>{"$ " + data.price}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.review}>
            <Text style={styles.nameText}>{data.name}</Text>
            <Text style={styles.nameText}>{"Reviews: " + data.review}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
              <Text style={styles.nameText}>{data.rating}</Text>
              <Image source={icons.star} style={styles.starIcon} />
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
          <Text style={styles.weight}>{data.detail}</Text>
          <Text style={styles.weight}>{"weight: "+data.weight}</Text>
          </View>
          <View style={styles.fuldivider} />

          <View style={styles.typeView}>
            <View style={styles.type}>
              <Image source={icons.leaf} style={styles.icon} />
              <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 5 }}>{data.type}</Text>
            </View>
            <View style={[styles.type, { marginLeft: 20 }]}>
              <Image source={icons.calories} style={styles.icon} />
              <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 5 }}>Few Calories</Text>
            </View>
          </View>
          <View style={styles.fuldivider} />
          <Text style={styles.subHeader}>Ingredients</Text>
          <Text style={styles.weight}>{data.Ingredients}</Text>
          <View style={styles.fuldivider} />
          <Text style={styles.subHeader}>Relivant Food:</Text>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            horizontal />
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',

  },
  starIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10
  },
  weight: {
    color: 'gray',
    fontSize: 16,
    lineHeight: 25
  },
  typeView: {
    flexDirection: 'row',
  },
  type: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  itemImage: {
    height: 250,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  divider: {
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 100
  },
  fuldivider: {
    borderColor: 'black',
    borderWidth: 0.5,
    marginVertical: 10
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5
  },
  subHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: 'white',
    height: 150,
    margin: 10,
    borderRadius: 20
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
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
  },
  review: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})