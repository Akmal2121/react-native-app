import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Login from "../screens/Login";
import Main from "../screens/Main";
import Posts from "../screens/Posts";
import Post from "../screens/Post";
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={(props) => <Login {...props} />}
        options={{ title: "Авторизация" }}
      />
      {/* <Stack.Screen
        name="main"
        component={(props) => <Main {...props} />}
        options={{ title: "Главная" }}
      /> */}
      {isAuth && (
        <>
          <Stack.Screen
            name="posts"
            component={(props) => <Posts {...props} />}
            options={{ title: "Посты" }}
          />
          <Stack.Screen
            name="post"
            component={(props) => <Post {...props} />}
            options={{ title: "Пост" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
