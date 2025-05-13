import AsyncStorage from "@react-native-async-storage/async-storage"
export const armazenar= async(key,value)=>{
    const vl = JSON.stringify(value)
    await AsyncStorage.setItem(key,vl)
}

export const getDados = async(key)=>{
    return JSON.parse(await AsyncStorage.getItem(key))
}