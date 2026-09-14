// app/index.tsx
import { useState, useEffect } from "react";
import { View } from "react-native";
import WeatherCard from "../components/WeatherCard";
import SearchBox from "../components/SearchBox";
import RiwayatList from "../components/RiwayatList";
import IndikatorAQI from "../components/IndikatorAQI";

export default function HalamanUtama() {
  const [kotaAktif, setKotaAktif] = useState("Pekalongan");
  const [riwayat, setRiwayat] = useState<string[]>(["Pekalongan"]);

  useEffect(() => {
    console.log("Kota aktif berubah menjadi:", kotaAktif);
  }, [kotaAktif]);

  function handleCari(kota: string) {
    setKotaAktif(kota);
    if (!riwayat.includes(kota)) {
      setRiwayat([...riwayat, kota]);
    }
  }

  const laporanUdara = {
    kota: kotaAktif,
    indeksAQI: 45,
    tingkat: "BAIK" as const,
    diperbaruiPada: "13 September 2026",
  };

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <SearchBox onCari={handleCari} />
      <WeatherCard kota={kotaAktif} suhu={29} tingkatAQI="BAIK" />
      <IndikatorAQI laporan={laporanUdara} />
      <RiwayatList daftarKota={riwayat} />
    </View>
  );
}