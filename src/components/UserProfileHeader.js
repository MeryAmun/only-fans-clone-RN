import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable
  } from "react-native";
  import React from "react";
  import { useRouter} from "expo-router";
  import { Ionicons ,FontAwesome } from "@expo/vector-icons";

const UserProfileHeader = ({user,isSubscribed, setIsSubscribed}) => {
    const router = useRouter();
  
  return (
    <View>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.imageBack}
      >
        <View style={styles.overlay} />
        <SafeAreaView
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => router.back()}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: "white" }}>
              1.4k Posts · 64.3k Likes · 15.3k Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={{padding:10}}>
      <View  style={{ flexDirection: "row",justifyContent:"space-between", alignItems: "flex-end", marginTop:-50}}>
        <Image source={{uri:user.avatar}} style={styles.userImage}/>
        <FontAwesome name="share-square-o" size={24} color="royalblue" />
      </View>
      <Text style={{fontSize:20,fontWeight:"600",marginVertical:5}}>{user.name}</Text>
      <Text style={{color:"gray",marginBottom:20}}>@{user.handle}</Text>
      <Text style={{lineHeight:20}}>{user.bio}</Text>

      <Text
      style={{color:"gray",marginTop:20, fontWeight:"bold"}}>SUBSCRIPTION</Text>

      <Pressable style={[styles.buttons,
       {backgroundColor: isSubscribed ? "white" : "royalblue"}
        ]}>
      <Text 
      onPress={() => setIsSubscribed(!isSubscribed)}
      style={[styles.buttonText,{color: isSubscribed ? "royalblue" : "white"}]}>{!isSubscribed ? "SUBSCRIBE" : "SUBSCRIBED"}</Text>
      <Text style={[styles.buttonText,{color: isSubscribed ? "royalblue" : "white"}]}>{user.subscriptionPrice > 0 ?`$${user.subscriptionPrice} / month` : "FOR FREE"}</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default UserProfileHeader

const styles = StyleSheet.create({
    container: {},
    imageBack: {
      height: 200,
      width: "100%",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    userImage:{
      width:100,
      height:100,
      borderRadius:100,
      borderColor:"white",
      borderWidth:3,
      marginRight:30
        },
        buttons:{
  flexDirection:"row",
  borderWidth:1,
  borderColor:"gainsboro",
  marginVertical:10,
  justifyContent:"space-between",
  padding:15,
  paddingHorizontal:20,
  borderRadius:50
        },
        buttonText:{
          color:"royalblue",
          fontWeight:"600"
        }
  });
  