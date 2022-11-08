import { StyleSheet, Text, View, Image } from "react-native";
export const home = () => (
  <View>
    <Text style={styles.titulo}>Boas vindas ao meu App</Text>
    <Text style={styles.description}>Cantor: Seu Jorge</Text>
    <View style={styles.top}>
      <Image
        source={{
          uri: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSAp5aM5kohbi2sLMLFP7wrvTnMDwIdfjZu9HB-uUUCudrpKRLackAYTZXcMVxP0eAD",
        }}
        style={styles.imagem}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  description: {
    textAlign: "center",
    margin: 16,
    fontSize: 18,
  },
  imagem: {
    width: 605,
    height: 605,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});