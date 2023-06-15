import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/style";
import { Image } from "react-native";

const Post = ({ route }) => {
  const item = route.params;
  console.log(route);
  return (
    <View style={[styles.postDetail]}>
      <View style={[styles.postItem, { flexDirection: "column-reverse" }]}>
        <Text style={[styles.postTitle, { marginTop: 0 }]}>
          Фамилия: {item.last_name}
        </Text>
        <Text style={[styles.postTitle, { marginTop: 0 }]}>
          Имя: {item.first_name}
        </Text>
        <Text style={[styles.postTitle, { marginTop: 10 }]}>
          Почта: {item.email}
        </Text>
        <Image
          source={item.avatar}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        ></Image>
      </View>
    </View>
  );
};

export default Post;
