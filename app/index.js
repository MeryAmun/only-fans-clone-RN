import { StyleSheet, View, FlatList } from "react-native";
import users from '../Asset Bundle OnlyFans/assets/data/users'
import UserCard from "../src/components/UserCard";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
      data={users}
      renderItem={({item}) => (
        <UserCard user={item}/>
      )}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:25
  },
  
});