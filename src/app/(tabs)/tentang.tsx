// src/app/(tabs)/tentang.tsx
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "../../constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: spacing.besar,
          gap: spacing.sedang,
        }}
      >
        <Text
          accessible
          accessibilityLabel="Judul halaman Tentang"
          accessibilityRole="header"
          style={{
            fontSize: typeScale.judul,
            fontWeight: "700",
          }}
        >
          Tentang
        </Text>

        <View style={{ gap: spacing.kecil }}>
          <Text
            style={{
              fontSize: typeScale.subjudul,
              fontWeight: "600",
            }}
          >
            Jelajah Aman
          </Text>

          <Text style={{ fontSize: typeScale.isi }}>
            Aplikasi informasi cuaca dan kualitas udara untuk membantu
            pengguna melakukan perjalanan dengan lebih aman.
          </Text>

          <Text style={{ fontSize: typeScale.isi }}>
            Versi: 1.0.0
          </Text>

          <Text style={{ fontSize: typeScale.isi }}>
            Pembuat: Inggil Himawan
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}