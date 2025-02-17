import {useState } from "react";
import { View } from "react-native";
import { IconButton, Text} from "react-native-paper";
export default function Home({ navigation }) {
    const [contador, setContador] = useState(1)
    const aumentarContador = () => { setContador((prevContador) => prevContador + 1) };
    return(
<View style={{flex: 1,
    backgroundColor: '#ff8929',
            justifyContent: "space-around",
            flexDirection: 'column',
            borderTopWidth: 15,
            borderColor: '#ff8929',
            alignItems: "center",
        }}>
            <Text variant="headlineMedium" style={{fontWeight:"bold"}}> IndecisivApp</Text>
            <Text variant="headlineMedium" style={{fontWeight:"600"}}> Añadir Opciones</Text>
            <IconButton containerColor="#ff8929" size={80} icon={'plus-circle'} onPress={() => {
                aumentarContador();
                navigation.navigate('Opciones', {screen:'Opciones',id:contador})
            }}></IconButton>
            <Text variant="headlineMedium" style={{fontWeight:"600"}}> Decidir</Text>
            <IconButton  iconColor="green" containerColor="#ff8929" size={80} icon={'check-circle'} onPress={() => { navigation.navigate('Decision') }}></IconButton>
</View>
    )
}