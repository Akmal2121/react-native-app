import React, { useState } from "react";
import { View, TextInput, TouchableHighlight, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authReducer, changeAuthAction } from "../store/authReducer";
import { styles } from "../styles/style";

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

const Login = (props) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { isAuth } = useSelector((state) => state.authReducer);
  let data = {};
  const dispatch = useDispatch();
  async function checkLogin() {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const token = await response.json();
    if (response.ok) {
      props.navigation.navigate("posts");
      dispatch(changeAuthAction(true));
    }
  }
  function login() {
    data = {
      email: form.username,
      password: form.username,
    };
    checkLogin();
  }
  return (
    <View style={[styles.login, { alignItems: "center" }]}>
      <TextInput
        style={[styles.input, { width: "100%" }]}
        defaultValue={form.username}
        placeholder="Email"
        onChangeText={(NewUsername) =>
          setForm({ ...form, username: NewUsername })
        }
      />
      <TextInput
        style={styles.input}
        defaultValue={form.password}
        placeholder="Password"
        onChangeText={(NewPassword) =>
          setForm({ ...form, password: NewPassword })
        }
      />
      <TouchableHighlight style={styles.btn} onPress={login}>
        <Text style={styles.textWhite}>Добавить</Text>
      </TouchableHighlight>
      {isAuth ? null : (
        <Text style={{ color: "red" }}>введите учетный запись!</Text>
      )}
    </View>
  );
};

export default Login;
