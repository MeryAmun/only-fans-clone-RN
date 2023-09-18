import { StyleSheet,
    Text,
    View,
    Image,
    } from 'react-native'
import React from 'react'
import { Entypo,AntDesign,FontAwesome5 } from '@expo/vector-icons';

const Post = ({post}) => {
  return (
    <View  style={{marginVertical:15}}>
    <View  style={{flexDirection:"row", alignItems:"center",padding:5}}>
    <Image source={{uri:post.User.avatar}}
      style={{width:50, aspectRatio:1,borderRadius:50,marginRight:10}}
      />
      <View>
      <Text style={{fontWeight:"600",fontSize:16, marginBottom:5}}>{post.User.name}</Text>
      <Text style={{color:"gray"}}>@{post.User.handle}</Text>
      </View>
      <View style={{marginLeft:"auto", flexDirection:"row", alignItems:"center"}}>
      <Text style={{marginRight:5, color:"gray"}}>3 hours ago</Text>
      <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>
    </View>
    <Text style={{margin:10, lineHeight:18}}>{post.text}</Text>
      <Image source={{uri:post.image}}
      style={{width:"100%", aspectRatio:1}}
      />
       <View style={{margin:10, flexDirection:"row", alignItems:"center"}}>
       <AntDesign name="hearto" size={22} color="gray" style={{marginRight:10}}/>
       <FontAwesome5 name="dollar-sign" size={22} color="gray"  style={{marginRight:10}}/>
      </View>
        <Text style={{fontWeight:"500",marginHorizontal:10}}>{post.likes} Likes</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})