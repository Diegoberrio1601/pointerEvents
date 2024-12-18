import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);

  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    handleAnimated();
  }, [toggle]);

  const animatedStyles = {
    opacity: animation,
  };

  const lista = [
    { id: 1, title: "Item # 1" },
    { id: 2, title: "Item # 2" },
    { id: 3, title: "Item # 3" },
    { id: 4, title: "Item # 4" },
    { id: 5, title: "Item # 5" },
  ];

  const Picker = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setToggle(!toggle);
        }}
      >
        <Text style={styles.buttonText}>Mostrar lista</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F29F58" }}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.listContainer, animatedStyles]}
          pointerEvents={toggle ? "auto" : "none"}
        >
          {lista.map((x) => (
            <TouchableOpacity
              onPress={() => {
                setToggle(!toggle);
              }}
              key={x.id}
              style={[
                styles.item,
                {
                  borderBottomWidth:
                    x.id !== lista[lista.length - 1].id ? 1 : 0,
                  borderBottomColor: "#dadada",
                },
              ]}
            >
              <Text>{x.title}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
        <Picker />
        <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1833",
    paddingHorizontal: 22,
  },
  listContainer: {
    height: "auto",
    width: "100%",
    position: "absolute",
    backgroundColor: "#1B1833",
    zIndex: 10,
    borderWidth: 1,
    borderColor: "#adadad",
    borderRadius: 4,
  },
  item: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 14,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    backgroundColor: "#F29F58",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    position: "absolute",
    bottom: "2%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
