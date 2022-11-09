import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


export const Noticias = () => (
    <ScrollView>
    <View>
        <Text style={styles.titulo}>Noticia</Text>
        <Text style={styles.texto} >8 de junho de 1970 é a data de aniversario de Seu Jorge, ano que vem ele ira fazer 53 anos</Text>
        <Text style={styles.texto}>Seu Jorge faz única apresentação em São José dos Campos
            Show acontece no dia 14 de novembro no Palácio Sunset, às 20h</Text>
        <Image
            source={{
                uri: "https://pubimg.band.uol.com.br/files/f0743ac2ec895c5c6ffd.webp",
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
        height: 405,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
    },
});