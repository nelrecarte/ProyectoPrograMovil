import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";

type props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function Home({ route }: props) {
    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a FincaSmart</Text>
            <Text style={styles.text}>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#24327b',
    },
    text: {
        fontSize: 15,
        color: '#666',
        marginTop: 6,
    }
});
