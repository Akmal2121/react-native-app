import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { styles } from "../styles/style";
import { ScrollView } from "react-native";

const Main = (props) => {
  const [images, setImages] = useState([
    {
      id: 1,
      name: "Image-1",
      src: "https://avatars.mds.yandex.net/i?id=c4f9de43dffdc42f9c7a0ed734c3dc4e12dfd557-9154408-images-thumbs&n=13",
    },
    {
      id: 2,
      name: "Image-2",
      src: "https://avatars.mds.yandex.net/i?id=a7eb4c52b0e5ba9101e071f5bf6be65bfc8e1154-8312318-images-thumbs&n=13",
    },
    {
      id: 3,
      name: "Image-3",
      src: "https://avatars.mds.yandex.net/i?id=21a9ba838a4cf4a27d9bc88223728198570520e0-8497333-images-thumbs&n=13",
    },
  ]);
  const [form, setForm] = useState({ name: "", url: "" });

  function addImage() {
    setImages([...images, { id: Date.now(), name: form.name, src: form.url }]);
  }
  return (
    <ScrollView>
      <View style={styles.main}>
        <TouchableHighlight
          style={styles.btnHeader}
          onPress={() => props.navigation.navigate("posts")}
        >
          <Text style={styles.textWhite}>Посмотреть посты</Text>
        </TouchableHighlight>
        <Text style={styles.title}>Портфолио</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            defaultValue={form.name}
            onChangeText={(newName) => setForm({ ...form, name: newName })}
          />
          <TextInput
            style={styles.input}
            defaultValue={form.url}
            onChangeText={(newUrl) => setForm({ ...form, url: newUrl })}
          />
          <TouchableHighlight style={styles.btn} onPress={addImage}>
            <Text style={styles.textWhite}>Добавить</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <View style={styles.imageBlock}>
              <Image source={item.src} style={styles.image} />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Main;
