import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,Image } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const CreatePost = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const router = useRouter();



    const onHandlePost = () => {
        console.log(text)
        setText("")
    }




    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
  return (
    <SafeAreaView style={{margin:10}}>
        <View style={{flexDirection:"row", alignItems:"center",marginBottom:20}}>
        <Ionicons
            name="arrow-back"
            size={28}
            color="black"
            onPress={() => router.back()}
            style={{marginRight:10}}
          />
           <Text>Create Post</Text>
        </View>
      <TextInput placeholder='Create new Post...' 
      value={text} 
      onChangeText={setText}
      numberOfLines={3}
      
      />
      <View style={{marginVertical:18}}>
      <Feather name="image" size={24} color="black" onPress={pickImage}/>
      </View>
     { image && ( <Image source={{uri:image}} style={{width:"100%", aspectRatio:1}}/>)}
      <Button title='Post' onPress={onHandlePost}/>
    </SafeAreaView>
  )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop:25
      },
})