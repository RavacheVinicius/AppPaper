import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Albun = () => (
  <ScrollView>
    <View>
      <View>
        <Text style={styles.titulo}>Albuns:</Text>
      </View>
      <View style={styles.div}>
        <Image
          source={{
            uri: "https://images.genius.com/58d28feb960c3baeffe61de936e641bb.1000x1000x1.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://akamai.sscdn.co/uploadfile/letras/albuns/e/9/5/9/426551428410540.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://dvdefilme.files.wordpress.com/2015/06/seu-jorge-musicas-para-churrasco.jpg",
          }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/6Ba9J0luxlI/maxresdefault.jpg",
          }}
          style={styles.imagem}
        />
      </View>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  imagem: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});