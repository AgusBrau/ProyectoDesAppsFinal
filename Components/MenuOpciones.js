import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"
import { Modal, Text, View } from "react-native"
import OpcionNueva from "./OpcionNueva";
import { IconButton } from "react-native-paper";

const MenuOpciones = (props) => {
    const [editado, setEditado] = useState(false);
    const [opcionesDisponibles, setOpcionesDisponibles] = useState(undefined);
    const [modalState, setModalState] = useState(0)
    const [arrayEstado,setArrayEstado]= useState([])
    let actualizarelcontador = props.actualizarContador
    const handleModal = async(x) => {
        setModalState(x)
    }
    

    useEffect(() => {
        async function asyGet() {
            let getLength = await AsyncStorage.getAllKeys()
            return {Prop1:getLength}
        };
        asyGet().then(
            (value) => {
                setOpcionesDisponibles(value.Prop1.length)
            },
            (error) => console.log(error)
        )
    }, [props.contador])
    
    useEffect(() => { //Actualizar contador
        console.log(opcionesDisponibles, 'resolvio');
        actualizarelcontador(opcionesDisponibles);
        getData(opcionesDisponibles)
        setEditado(false)
    }, [opcionesDisponibles,editado])


    async function getData(numeroDeOpciones) {
        let arrayPrueba = [];
        for (let index = 0; index < numeroDeOpciones; index++) {
            let getTheOption = await AsyncStorage.getItem(index+1);
            let getTheOption2 = JSON.parse(getTheOption);
            arrayPrueba.push({
                OpcionId: getTheOption2.OpcionId,
                OpcionPros: getTheOption2.OpcionPros,
                OpcionCons: getTheOption2.OpcionCons,
                OpcionPosibles: getTheOption2.OpcionPosibles
            });
        }
        setArrayEstado(arrayPrueba)
    }


    let arrayFromDisponibles = arrayEstado


   let listArr = arrayFromDisponibles.map((info) => 
    {
        return (
            <View style={{
                backgroundColor: '#ff8929', justifyContent: 'center', height: 100, paddingLeft:12, borderRadius:5,
                alignItems: 'center', flex: 1, flexDirection: 'row', borderColor:'#404252',borderWidth:2, margin:4
            }}>
                <Text style={{fontSize:20}}>{'OPCION '+info.OpcionId}</Text>
                <IconButton size={50} icon={'chevron-down-circle'} onPress={() => handleModal(info.OpcionId)}></IconButton>
                <Modal transparent={true} visible={modalState==info.OpcionId} animationType="fade" >
                    <OpcionNueva numOpciones={info} display={'menu'} editar={setEditado}></OpcionNueva>
                    <IconButton size={70} icon={'chevron-up-circle'} onPress={() => setModalState(0)}></IconButton>
                </Modal>
            </View>
        ) } )




    return (
    <View>
                <View style={{backgroundColor: "#ff8929",alignContent:'space-around', flex:1, flexDirection:'row'}}>
                    {opcionesDisponibles ? <View>
                            {listArr}
                        </View>: ''}
                </View>

        </View>
        
    )
}
export default MenuOpciones