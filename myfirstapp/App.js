import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const arr = [
  "https://c4.wallpaperflare.com/wallpaper/246/462/453/laptop-macbook-iphone-apple-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/747/312/981/coffee-coffee-beans-cup-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/826/178/391/coffee-beans-hot-cup-coffee-bag-wallpaper-preview.jpg",
];
const App = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [num, setNum] = useState(0);
  return (
    <View>
      <ScrollView style="auto">
        <TextInput
          style={styles.txtInput}
          onChangeText={(txt) => {
            setInput(txt);
          }}
          value={input}
        ></TextInput>
        <Text style={styles.textStyle}>{text}</Text>
        <Button
          title="Fill Text"
          onPress={() => {
            setText(input);
          }}
        ></Button>
        <Button
          title="Clear"
          onPress={() => {
            setText("");
            setInput("");
          }}
        ></Button>

        <Image
          style={{ margin: 10 }}
          source={{
            width: 400,
            height: 300,
            uri: arr[num],
          }}
        ></Image>
        <Button
          title="Next"
          onPress={() => {
            if (num == arr.length - 1) {
              setNum(0);
            } else if (num < 0) {
              setNum(arr.length - 1);
            } else {
              setNum(num + 1);
            }
          }}
        ></Button>
        <Button
          title="previous"
          style={{ marginTop: 20}}
          onPress={() => {
            if (num == 0) {
              setNum(arr.length - 1);
            } else {
              setNum(num - 1);
            }
          }}
        ></Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    backgroundColor: "gray",
    color: "white",
    padding: 20,
    fontSize: 18,
    borderRadius: 10,
  },
  txtInput: {
    backgroundColor: "gray",
    color: "white",
    padding: 20,
    marginHorizontal: 24,
    fontSize: 15,
    borderRadius: 10,
    marginTop: 50,
  },
});
export default App;