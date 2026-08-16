import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from "react-native";
import PlanetCard from "./components/PlanetCard";
import PlanetModal from "./components/PlanetModal";
import { PLANETS } from "./data/planets";
import { Planet } from "./types/planet";

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openPlanet = (planet: Planet) => {
    setSelectedPlanet(planet);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>🪐 Sistema Solar</Text>
      <Text style={styles.subtitle}>Toca un planeta para explorarlo</Text>

      <FlatList
        data={PLANETS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PlanetCard planet={item} onPress={() => openPlanet(item)} />
        )}
      />

      <PlanetModal
        planet={selectedPlanet}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B16",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#B0B0C0",
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
});