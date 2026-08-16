import React from "react";
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Planet } from "../types/planet";

interface Props {
  planet: Planet | null;
  visible: boolean;
  onClose: () => void;
}

const PlanetModal = ({ planet, visible, onClose }: Props) => {
  if (!planet) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={[styles.container, { borderColor: planet.color }]}>
          <Image source={planet.image} style={styles.image} />
          <Text style={styles.name}>{planet.name}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Diámetro:</Text>
            <Text style={styles.value}>{planet.diameter}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Distancia al Sol:</Text>
            <Text style={styles.value}>{planet.distanceFromSun}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Lunas:</Text>
            <Text style={styles.value}>{planet.moons}</Text>
          </View>

          <Text style={styles.description}>{planet.description}</Text>
          <Text style={styles.funFact}>💡 {planet.funFact}</Text>

          <TouchableOpacity style={[styles.button, { backgroundColor: planet.color }]} onPress={onClose}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#1E1E2E",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    borderWidth: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 4,
  },
  label: {
    color: "#B0B0C0",
  },
  value: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  description: {
    color: "#DDDDDD",
    marginTop: 10,
    textAlign: "center",
  },
  funFact: {
    color: "#FFD670",
    marginTop: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    marginTop: 18,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "700",
  },
});

export default PlanetModal;