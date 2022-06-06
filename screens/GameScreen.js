import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

function generateRandomNumberBetween(min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>GameScreen</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
