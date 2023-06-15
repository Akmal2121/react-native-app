import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },
  mainPosts: {
    padding: 5,
  },
  dFlex: {
    flexDirection: "row",
  },
  login: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  postItem: {
    padding: 5,
    marginBottom: 10,
    backgroundColor: "#e9e9e9",
    borderRadius: 10,
  },
  postDetail: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  postTitle: {
    marginBottom: 10,
  },
  id: {
    marginRight: 30,
  },
  textWhite: {
    color: "white",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  form: {
    // borderBottomColor: "gray",
    // borderBottomWidth: 2,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },
  btn: {
    width: "100%",
    backgroundColor: "teal",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  btnHeader: {
    backgroundColor: "#0e549a",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  imageBlock: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 20,
  },
});
