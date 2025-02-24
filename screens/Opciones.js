import { View, } from "react-native";
import OpcionNueva from "../Components/OpcionNueva";
import { IconButton } from "react-native-paper";
export default function Opciones({ navigation, route }) {
    const opcionId = route.params.id 
    return (

<View style={{flex: 1,
    backgroundColor: '#ff8929',
    alignItems: 'center',
            justifyContent: 'center'
        }}>
            <OpcionNueva id={opcionId} display={'opcion'}></OpcionNueva>
            <IconButton size={80} iconColor="#344dbf" icon="chevron-left-circle" onPress={() => {
                navigation.goBack()
            }}></IconButton>
</View>
    )
}