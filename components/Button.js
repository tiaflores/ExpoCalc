import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];


  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#3ba0db",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  buttonSecondary: {
    backgroundColor: "#ff4f42"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});