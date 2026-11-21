import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type TarjetaIndicadorProps = {
    titulo: string;
    valor: string;
    icono: keyof typeof MaterialIcons.glyphMap;
    color?: string;
}

export default function TarjetaIndicador({ titulo, valor, icono, color = "#24327b" }: TarjetaIndicadorProps) {
    return (
        <View style={styles.tarjeta}>
            <MaterialIcons name={icono} size={26} color={color} />
            <Text style={[styles.valor, { color }]}>{valor}</Text>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tarjeta: {
        width: '47%',
        backgroundColor: '#f4f6fb',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: 'flex-start',
    },
    valor: {
        fontSize: 22,
        fontWeight: '700',
        marginTop: 6,
    },
    titulo: {
        fontSize: 13,
        color: '#555',
        marginTop: 2,
    },
});
