import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Biografia = () => (
   <ScrollView>
   <View>
        <Text style={styles.titulo}>Biografia</Text>
        <Text style={styles.texto}>Jorge Mário da Silva, conhecido pelo nome artístico de Seu Jorge, é um ator, cantor, compositor e multi-instrumentista brasileiro de MPB, R&B, samba e soul.</Text>
        <Image
            source={{
                uri: "https://digital.faap.br/hs-fs/hubfs/FAAP%20-%20Card%20-%20Seu%20Jorge.png?width=378&height=400&name=FAAP%20-%20Card%20-%20Seu%20Jorge.png",
            }}
            style={styles.imagem}
        />
    </View>
    </ScrollView>
)
const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        margin: 24,
        fontSize: "90px",
    },
    texto: {
        textAlign: "center",
        margin: 24,
        fontSize: "22px",
    },
    imagem: {
        width: 855,
        height: 805,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
    },
});