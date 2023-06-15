import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight, Image } from "react-native";
import { styles } from "../styles/style";
import { api_posts } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsAction,
  deletePostAction,
  searchUserRedux,
} from "../store/postsReducer";
import PostForm from "../components/PostForm";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

const Posts = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsReducer);
  const [search, setSearch] = useState("");
  async function getPosts() {
    const response = await fetch(api_posts);
    const data = await response.json();
    dispatch(getPostsAction(data.data));
  }
  function deletePost(item) {
    dispatch(deletePostAction(item));
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <ScrollView>
      <View style={styles.mainPosts}>
        <PostForm />
        <TextInput
          defaultValue={search}
          placeholder="search"
          onChangeText={(e) => {
            setSearch(e);
            if (search === "") {
              getPosts();
            }
            dispatch(searchUserRedux(search));
          }}
        />
        <Text style={styles.title}>Всего постов - {posts.length}</Text>
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              style={styles.postItem}
              onPress={() => props.navigation.navigate("post", item)}
              onLongPress={() => deletePost(item)}
            >
              <View style={[styles.dFlex]}>
                <Text style={styles.id}>{index + 1}</Text>
                <View>
                  <View
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Имя: {item.first_name}</Text>
                    <Text>Фамилия: {item.last_name}</Text>
                    <Text>Почта: {item.email}</Text>
                    <Image
                      source={item.avatar}
                      style={{ width: 50, height: 50 }}
                    ></Image>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Posts;
