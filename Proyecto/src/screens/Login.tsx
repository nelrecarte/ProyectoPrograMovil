import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { RootStackParamList } from "../navigation/StackNavigator";

type props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export default function Login({ navigation }: props) {
    //hooks de react: useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //sin validaciones por ahora: se agregaran despues
    const handleOnPressLogIn = () => {
        navigation.navigate("HomeScreen", { email });
    }

    const handleOnPressSignUp = () => {
        navigation.navigate("RegisterScreen");
    }

    const handleOnPressForgotPwd = () => {
        console.log("Recuperar contraseña");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FincaSmart</Text>
            <Text style={styles.subtitle}>Gestión inteligente de tu finca</Text>

            <CustomInput
                onChangeText={setEmail}
                value={email}
                placeholder='Correo electrónico'
                type='email'
            />
            <CustomInput
                onChangeText={setPassword}
                value={password}
                placeholder='Contraseña'
                type='password'
            />
            <View style={styles.buttonsContainer}>
                <CustomButton title="Iniciar sesión" onPressButton={handleOnPressLogIn} />
                <CustomButton title="Crear cuenta" onPressButton={handleOnPressSignUp} variant='secondary' />
                <CustomButton title="¿Olvidaste tu contraseña?" onPressButton={handleOnPressForgotPwd} variant='tertiary' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#24327b',
    },
    subtitle: {
        fontSize: 15,
        color: '#666',
        marginBottom: 20,
    },
    buttonsContainer: {
        padding: 15,
        alignItems: 'center',
    }
});
