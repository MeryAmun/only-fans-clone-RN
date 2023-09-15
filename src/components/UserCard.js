import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from 'react'

const UserCard = ({user}) => {
  return (
    <ImageBackground 
    source={{uri:user.coverImage}}
    style={styles.userCard}>
{/* image */}
<View  style={styles.overlay}/>
<Image 
source={{uri:user.avatar}}
style={styles.userImage}
/> 
<View>
<Text style={styles.nameStyle}>{user.name}</Text>
<Text style={styles.handleStyle}>@{user.handle}</Text>
</View>
    </ImageBackground>
  )
}

export default UserCard

const styles = StyleSheet.create({
    userCard:{
        backgroundColor:"gray",
        padding:10,
        flexDirection:"row",
        alignItems:"flex-end",
        borderRadius:10,
        overflow:"hidden",
        marginVertical:5
          },
          userImage:{
        width:100,
        height:100,
        borderRadius:100,
        borderColor:"white",
        borderWidth:3,
        marginRight:30
          },
          overlay:{
         ...StyleSheet.absoluteFillObject
          },
          nameStyle:{
         color:"white",
         fontSize:22,
         fontWeight:"500",
        marginBottom:5
          },
          handleStyle:{
            color:"white"
          }
         
})