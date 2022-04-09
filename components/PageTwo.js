import { Text, View, StyleSheet, ScrollView, Alert, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { Component, useState } from 'react'
import { CheckBox } from 'react-native-elements'
import {Categories, data, Follow, otherBrands} from './topics'
import Header from './Header';
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../assets/styles'

export default function PageTwo ({})   {
    const [products, setProducts] = useState(data);
    const [brands, setBrands] = useState(Categories);
    const [follow, setFollow] = useState(Follow);
    const [otherBrands, setOtherbrands] = useState(otherBrands);
    const [allItems, setAllItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    

    const handleChange = (id, items) => {
        let temp = items.map((product) => {
          if (id === product.id) {
            return {...product, isChecked: !product.isChecked };
          }
          return product;
        });

        if(products.some(r=> temp.indexOf(r) >= 0)){
          setProducts(temp)
        }else if(brands.some(r=> temp.indexOf(r) >= 0)){
          setBrands(temp)
        }else if(follow.some(r=> temp.indexOf(r) >= 0)){
          setFollow(temp)
        }
        // setAllItems(temp)
        
        setAllItems([...products, ...follow, ...Categories])
      };
      let allObjects = ([...brands, ...follow, ...products])

      let selected = allObjects.filter((product) => product.isChecked);


      const renderFlatList = (renderData) => {
        return (
          <View>
            
        
              <FlatList
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={Math.ceil(renderData.length / 2)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={renderData}
                renderItem={({ item }) => (
                  <View >
                    <View>
                      <CheckBox title={item.txt} checked={item.isChecked} onPress={() => {  handleChange(item.id, renderData) }} />
                    </View>
                  </View>
              
              )}
            />
          
          </View>
          
          
        );
      };



    return (
     
        <SafeAreaView style={styles.container}>

          {/* Header Section */}
          <Header />
          {/* Header Section */}


            <View>
                <Text style={{marginHorizontal: 20, fontSize: 25}}>Categories</Text>
                <View >{renderFlatList(products)}</View>
            </View>

            <View>
                <Text style={{marginHorizontal: 20, fontSize: 25}}>Brands</Text>
                <View >{renderFlatList(brands)}</View>
            </View>

            <View>
                <Text style={{marginHorizontal: 20, fontSize: 25}}>Follow</Text>
                <View >{renderFlatList(follow)}</View>
            </View>

    
            <View style={styles.btnSection}>
              <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.btnText}>Select {selected.length} Topics</Text>
              </TouchableOpacity>
            </View>
        
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                <FlatList
                    contentContainerStyle={{alignSelf: 'left'}}
                    numColumns={Math.ceil(selected.length / 3 )}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={selected}
                    renderItem={({ item }) => (
                      <View >
                        <Text style={{backgroundColor:'black', color:'white', margin: 2, padding: 3, borderRadius: 20}}>{item.txt} <MaterialIcons name='check-circle' /></Text>
                      </View>
                  
                  )}
                />
                    
                  <TouchableOpacity
                    style={[styles.modelBtn]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    {<Text style={styles.modelBtnText}>Ok Cool</Text>}
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        </SafeAreaView>
  
      
    )

}


