import React, { useState } from "react";
import { View, TextInput, TouchableHighlight, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addPostAction } from "../store/postsReducer";
import { styles } from "../styles/style";
import logo from "../assets/logo.png";

const PostForm = () => {
  const [formPost, setFormPost] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const dispatch = useDispatch();
  function addPost() {
    const newPost = {
      id: Date.now(),
      first_name: formPost.first_name,
      last_name: formPost.last_name,
      email: formPost.email,
      avatar: logo,
    };
    dispatch(addPostAction(newPost));
  }
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        defaultValue={formPost.first_name}
        placeholder="имя"
        onChangeText={(newTitle) =>
          setFormPost({ ...formPost, first_name: newTitle })
        }
      />
      <TextInput
        style={styles.input}
        defaultValue={formPost.last_name}
        placeholder="фамилия"
        onChangeText={(newTitle) =>
          setFormPost({ ...formPost, last_name: newTitle })
        }
      />
      <TextInput
        style={styles.input}
        defaultValue={formPost.email}
        placeholder="почта"
        onChangeText={(newBody) => setFormPost({ ...formPost, email: newBody })}
      />
      <TouchableHighlight style={styles.btn} onPress={addPost}>
        <Text style={styles.textWhite}>Добавить</Text>
      </TouchableHighlight>
    </View>
  );
};

export default PostForm;
