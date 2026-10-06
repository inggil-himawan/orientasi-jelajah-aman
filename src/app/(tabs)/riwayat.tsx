// src/app/(tabs)/riwayat.tsx
import { useState, useCallback } from "react";
import { View, Text, Button, Alert, Platform } from "react-native";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ambilSemuaFavorit, hapusFavorit } from "../../services/favoritStorage";
import { KotaFavorit } from "../../types/favorit";


export default function TabRiwayat() {
  const [daftarFavorit, setDaftarFavorit] = useState<KotaFavorit[]>([]);

  useFocusEffect(
    useCallback(() => {
      ambilSemuaFavorit().then(setDaftarFavorit);
    }, [])
  );

  async function hapus(id: number) {
    await hapusFavorit(id);
    setDaftarFavorit((prev) => prev.filter((k) => k.id !== id));
  }

  // FITUR 1: konfirmasi sebelum menghapus
  function konfirmasiHapus(kota: KotaFavorit) {
    const pesan = `Yakin hapus ${kota.nama}?`;

    // Web: Alert.alert tidak didukung, pakai confirm bawaan browser
    if (Platform.OS === "web") {
      if (window.confirm(pesan)) {
        hapus(kota.id);
      }
      return;
    }

    // Android / iOS
    Alert.alert("Konfirmasi", pesan, [
      { text: "Batal", style: "cancel" },
      {
        text: "Hapus",
        style: "destructive",
        onPress: () => hapus(kota.id),
      },
    ]);
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Kota Favorit</Text>

      {/* FITUR 2: jumlah favorit */}
      <Text>Tersimpan {daftarFavorit.length} kota</Text>

      {daftarFavorit.length === 0 && <Text>Belum ada kota favorit</Text>}
      {daftarFavorit.map((kota) => (
        <View
          key={kota.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{kota.nama}</Text>
          <Button title="Hapus" onPress={() => konfirmasiHapus(kota)} />
        </View>
      ))}
    </SafeAreaView>
  );
}