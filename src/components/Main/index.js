import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

const itemArray = new Array(9).fill("empty");

const Main = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross;
      setIsCross(!itemArray[itemNumber]);
    }

    winGame();
  };

  const chooseItemColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    } else {
      return "#2a2a2a";
    }
  };

  const chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    } else {
      return "pencil";
    }
  };

  const resetGame = () => {
    itemArray.fill("empty");
    setWinMessage("");

    this.forceUpdate();
  };

  const winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinMessage((itemArray[3] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinMessage((itemArray[6] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinMessage((itemArray[1] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      setWinMessage((itemArray[2] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" wins"));
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinMessage((itemArray[2] ? "cross" : "circle").concat(" wins"));
    }
  };

  return (
    <View>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(0)}>
              <Entypo
                name={chooseItemIcon(0)}
                size={50}
                color={chooseItemColor(0)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(1)}>
              <Entypo
                name={chooseItemIcon(1)}
                size={50}
                color={chooseItemColor(1)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(2)}>
              <Entypo
                name={chooseItemIcon(2)}
                size={50}
                color={chooseItemColor(2)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(3)}>
              <Entypo
                name={chooseItemIcon(3)}
                size={50}
                color={chooseItemColor(3)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(4)}>
              <Entypo
                name={chooseItemIcon(4)}
                size={50}
                color={chooseItemColor(4)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(5)}>
              <Entypo
                name={chooseItemIcon(5)}
                size={50}
                color={chooseItemColor(5)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(6)}>
              <Entypo
                name={chooseItemIcon(6)}
                size={50}
                color={chooseItemColor(6)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(7)}>
              <Entypo
                name={chooseItemIcon(7)}
                size={50}
                color={chooseItemColor(7)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(8)}>
              <Entypo
                name={chooseItemIcon(8)}
                size={50}
                color={chooseItemColor(8)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.winMsg}>{winMessage}</Text>

      <Button
        onPress={() => resetGame()}
        size="lg"
        borderRadius="full"
        p="2.5"
        colorScheme="primary"
      >
        <Text style={styles.btnTxt}>Reset Game</Text>
      </Button>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {},
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "#2a2a2a",
    padding: 30,
  },
  winMsg: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnTxt: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
});
