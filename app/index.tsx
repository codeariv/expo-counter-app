import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          onPress={increaseCount}
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
            borderRadius: 100,
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: "white",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 50,
            }}
          >
            {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={decreaseCount}
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
            borderRadius: 100,
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: "white",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
