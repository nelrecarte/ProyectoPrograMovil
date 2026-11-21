import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import TarjetaIndicador from "../components/TarjetaIndicador";
import CustomButton from "../components/CustomButton";
import { indicadores, proximasActividades } from "../data/finca";
import { TipoActividad } from "../utils/types/Finca";

type props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

//icono segun el tipo de actividad (operador ternario encadenado)
const getIconoActividad = (tipo: TipoActividad): keyof typeof MaterialIcons.glyphMap =>
    tipo === "vacuna" ? "vaccines" :
        tipo === "revision" ? "medical-services" : "event-note";

export default function Home({ route, navigation }: props) {
    const { email } = route.params;

    const handleOnPressRegistrarAnimal = () => {
        console.log("Registrar animal");
    }

    const handleOnPressAgregarActividad = () => {
        console.log("Agregar actividad");
    }

    const handleOnPressCerrarSesion = () => {
        navigation.popToTop();
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.saludo}>Bienvenido(a)</Text>
            <Text style={styles.email}>{email}</Text>

            <Text style={styles.seccion}>Resumen de la finca</Text>
            <View style={styles.cuadricula}>
                {indicadores.map((indicador) => (
                    <TarjetaIndicador
                        key={indicador.id}
                        titulo={indicador.titulo}
                        valor={indicador.valor}
                        icono={indicador.icono}
                        color={indicador.color}
                    />
                ))}
            </View>

            <Text style={styles.seccion}>Próximas actividades</Text>
            {proximasActividades.map((actividad) => (
                <View key={actividad.id} style={styles.actividad}>
                    <MaterialIcons name={getIconoActividad(actividad.tipo)} size={24} color="#24327b" />
                    <View style={styles.actividadTexto}>
                        <Text style={styles.actividadTitulo}>{actividad.titulo}</Text>
                        <Text style={styles.actividadFecha}>{actividad.fecha}</Text>
                    </View>
                </View>
            ))}

            <Text style={styles.seccion}>Accesos rápidos</Text>
            <View style={styles.botones}>
                <CustomButton title="Registrar animal" onPressButton={handleOnPressRegistrarAnimal} />
                <CustomButton title="Agregar actividad" onPressButton={handleOnPressAgregarActividad} variant="secondary" />
                <CustomButton title="Cerrar sesión" onPressButton={handleOnPressCerrarSesion} variant="tertiary" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    saludo: {
        fontSize: 26,
        fontWeight: '700',
        color: '#24327b',
    },
    email: {
        fontSize: 15,
        color: '#666',
        marginBottom: 10,
    },
    seccion: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 10,
        color: '#1f2430',
    },
    cuadricula: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 12,
    },
    actividad: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7ee',
    },
    actividadTexto: {
        marginLeft: 12,
    },
    actividadTitulo: {
        fontSize: 15,
        fontWeight: '600',
    },
    actividadFecha: {
        fontSize: 13,
        color: '#666',
        marginTop: 2,
    },
    botones: {
        alignItems: 'center',
        paddingBottom: 20,
    },
});
