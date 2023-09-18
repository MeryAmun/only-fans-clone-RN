import {
  StyleSheet,
  Text,
  View,
  FlatList,ScrollView
} from "react-native";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "expo-router";
import users from "../../Asset Bundle OnlyFans/assets/data/users";
import posts from "../../Asset Bundle OnlyFans/assets/data/posts"
import Post from "../../src/components/Post";
import { Ionicons ,FontAwesome5 } from "@expo/vector-icons";
import UserProfileHeader from "../../src/components/UserProfileHeader";


const ProfileScreen = () => {
  const router = useRouter();
  const { id } = useSearchParams();
  const [isSubscribed, setIsSubscribed] = useState(false)

  const user = users.find((x) => x.id === id);
  if(!user){
    return (
      <View style={styles.container}>
      <Text>User not Found</Text>
      </View>
    );
  }

  if(!isSubscribed){
    return (
      <ScrollView>
         <UserProfileHeader user={user} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}/>
         <View style={{backgroundColor:"gainsboro",alignItems:"center",padding:20}}>
         <Text style={{backgroundColor:"royalblue",padding:15,height:50,borderRadius:20,overflow:"hidden",color:"white",margin:20}}>Subscribe to view user's posts</Text>
         <FontAwesome5 name="lock" size={50} color="gray" />
         </View>
      </ScrollView>
    )
  }
  return (
    <FlatList
    data={posts}
    renderItem={({item}) => (
      <Post post={item}/>
    )}
    ListHeaderComponent={() => (
      <UserProfileHeader user={user} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}/>
    )}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  
});
