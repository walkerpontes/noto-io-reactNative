import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
export default function ViewNote({notes,deleteNote}) {
    return (
        <View style={styles.body}>
        <View style={styles.list}>
            <FlatList
            style={{alignSelf:'center'}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={notes}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> (
                <View style={styles.card}>
                    <Text style={styles.note}>{item.note}</Text>
                    <View style={styles.bottom}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Feather name='trash-2' size={25} onPress={()=> deleteNote(item.id)}></Feather>
                    </View>
                </View>
            )}
            ></FlatList>
        
        </View>
        </View>
    )
};
const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        padding:20,
        marginTop: 40
    },
    list:{width: "100%"},
    card:{
        width: 370,
        backgroundColor: "#ffffff",
        marginRight: 20,
        borderRadius: 10,
        padding:20,
        paddingTop: 40,
        paddingBottom: 100
    },
    note:{
        fontSize: 20
    },
    bottom:{
        width: "100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position: "absolute",
        bottom:20,
        left:20,
    },
    text:{
        fontSize:15
    }
})