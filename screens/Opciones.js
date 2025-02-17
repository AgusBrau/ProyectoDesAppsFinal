import { View, } from "react-native";
import OpcionNueva from "../Components/OpcionNueva";
import { IconButton } from "react-native-paper";
export default function Opciones({ navigation, route }) {
    const opcionId = route.params.id
    const handleSubmit = () => {
        
        const setData = async () => {
            try {
                console.log(opcionId)
                let dataOpcion = { OpcionId: opcionId, OpcionPros: inputPros, OpcionCons: inputCons, OpcionPosibles: inputResult }
                console.log(dataOpcion)
            await AsyncStorage.setItem(dataOpcion.OpcionId,JSON.stringify(dataOpcion))
            } catch (error) { console.log(error) }
        }
        setData()
        /*const checkData = async () => {
            try {
                const getIdstorage = await AsyncStorage.getItem('OpcionId')
                let newData = JSON.parse(getIdstorage)
                if (!newData) { newData = [] }
                newData.push(dataOpcion)
                
            }catch(error){console.log(error);
            }
        }*/
    }
    return (

<View style={{flex: 1,
    backgroundColor: '#ff8929',
    alignItems: 'center',
            justifyContent: 'center'
        }}>
            <OpcionNueva id={opcionId} handlerSubmit={handleSubmit}></OpcionNueva>
            <IconButton  size={60} iconColor="#344dbf" icon="chevron-left-circle" onPress={ ()=>{navigation.goBack()}}></IconButton>
</View>
    )
}