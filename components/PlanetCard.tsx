import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Planet } from "../types/planet";

interface Props {
  planet: Planet;
  onPress: () => void;
}

const PlanetCard = ({ planet, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: planet.color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={planet.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{planet.name}</Text>
        <Text style={styles.subtitle}>Posición #{planet.order} desde el Sol</Text>
        <Text style={styles.subtitle}>{planet.moons} luna(s)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
    borderRadius: 14,
    marginBottom: 14,
    padding: 10,
    borderLeftWidth: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 14,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 13,
    color: "#B0B0C0",
  },
});

export default PlanetCard;