import AsyncStorage from "@react-native-async-storage/async-storage"
import {useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { Button, Card, Divider, IconButton, SegmentedButtons, TextInput } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"


const OpcionNueva = (props) => {
    const displayOpciones = props.display

    const [prosCons, setProsCons] = useState("")
    const [resultados, setResultados] = useState(false)
    const [inputPros, setInputPros] = useState("")
    const [inputCons, setInputCons] = useState("")
    const [inputResult, setInputResult] = useState("")
    const navigation = useNavigation()
    
    console.log(props,'log de render')

    const handleGet = useCallback(() => {
        setInputCons(props.numOpciones.OpcionCons);
        setInputPros(props.numOpciones.OpcionPros)
        setInputResult(props.numOpciones.OpcionPosibles)
    }, [props])
    useEffect(() => {
        if (displayOpciones === 'menu') {
            handleGet()
        }
    }, [displayOpciones])

    const handleEdit = async () => {
        try{
            let editData = { OpcionId: props.numOpciones.OpcionId, OpcionPros: inputPros, OpcionCons: inputCons, OpcionPosibles: inputResult }
            await AsyncStorage.setItem(editData.OpcionId.toString(), JSON.stringify(editData))
            props.editar(true)
        }
        catch(error) { console.log(error) }
    }

    const handleSubmit = () => {
        
        const setData = async () => {
            try {
                let dataOpcion = { OpcionId: titulo, OpcionPros: inputPros, OpcionCons: inputCons, OpcionPosibles: inputResult }
                let stringId= dataOpcion.OpcionId.toString()
                await AsyncStorage.setItem(stringId, JSON.stringify(dataOpcion))
                let storedData = await AsyncStorage.getItem(props.id)
                let storedDataJson = JSON.parse(storedData) 
                navigation.popTo('Home', { newOpcion: storedDataJson }) //storedDataJson
            } catch (error) { console.log(error) }
        }
        setData()

    }
    let titulo= props.id + 1
    
    return (
        <View key={displayOpciones==='opcion'?'' :props.numOpciones}>
            <Card style={{
            alignItems:'center',
            justifyContent: 'flex-start',
            flex: 1,
            backgroundColor:  '#404252' ,
            flexDirection: 'column',
                margin: 50,
                flexWrap: 'wrap',
                width: 340,
        }} contentStyle={{width:340,alignContent:'center',}}>
                <Card.Content>
                {displayOpciones === 'opcion' ? <Card.Title title={"OPCION " + titulo} titleStyle={{ color: '#ff8929', fontWeight: 'bold', fontSize: 20 }} />
                :<Card.Title title={"display no es opcion " + props.numOpciones.OpcionId} titleStyle={{ color: '#ff8929', fontWeight: 'bold', fontSize: 20 }} />}
                </Card.Content>
            <Card.Content>
                    <SegmentedButtons value={prosCons}  onValueChange={setProsCons} 
                        buttons={[{
                            value: 'Pros', label: 'Pros', icon: 'plus-box', checkedColor: "#ff8929",
                            uncheckedColor: "#ff8929", style: { width: 100, }, labelStyle: { fontSize:20 },
                        },
                        {value: 'Cons', label: 'Cons', icon: 'minus-box', checkedColor: "#ff8929", uncheckedColor: "#ff8929",labelStyle: { fontSize:20 } }
                        
                        ]} />
                    {displayOpciones==='opcion'?
                    <TextInput multiline={true} style={prosCons == 'Pros' ? { display: "flex", backgroundColor: '#50d977', } : { display: "none" }}
                            value={inputPros} onChangeText={(e) => { setInputPros(e) }}></TextInput>
                        :
                    <TextInput multiline={true} style={prosCons == 'Pros' ? { display: "flex", backgroundColor: '#50d977', } : { display: "none" }}
                            value={inputPros} onChangeText={(e) => { setInputPros(e) }}></TextInput>
                    }
                    <Divider style={{ marginBottom: 8, backgroundColor: "#404252" }}></Divider>
                    {displayOpciones === 'opcion' ?
                        <TextInput multiline={true} style={prosCons == 'Cons' ? { display: "flex", backgroundColor: '#d95050', } : { display: "none" }}
                            value={inputCons} onChangeText={(e) => { setInputCons(e) }}></TextInput>
                        :
                        <TextInput multiline={true} style={prosCons == 'Cons' ? { display: "flex", backgroundColor: '#d95050', } : { display: "none" }}
                            value={inputCons} onChangeText={(e) => { setInputCons(e) }}></TextInput>
                    }
                    <Button textColor="#404252" buttonColor="#ff8929" icon={'dots-horizontal'} labelStyle={{fontWeight:"bold",fontSize:17}}
                        onPress={() => {
                            setResultados(!resultados)
                        }}>Posibles resultados</Button>
                    <Divider style={{ marginBottom: 5, backgroundColor: "#404252" }}></Divider>
                    {displayOpciones === 'opcion' ?
                        <TextInput multiline={true} style={resultados ? { display: 'flex', fontWeight: 'bold' } : { display: "none", color: '#fff' }}
                            value={inputResult} onChangeText={(e) => { setInputResult(e) }}></TextInput>
                        :<TextInput multiline={true} style={resultados ? { display: 'flex', fontWeight: 'bold' } : { display: "none", color: '#fff' }}
                            value={inputResult} onChangeText={(e) => { setInputResult(e) }}></TextInput>
                    }
                </Card.Content>
                {displayOpciones === 'opcion' ?
                    <IconButton mode='outlined' containerColor="#ff8929" icon='cube-send' size={45}
                    style={{ justifyContent: 'center', alignSelf: 'center', borderColor: '#404252', borderWidth: 4 }} onPress={() => {
                            handleSubmit()
                    }} /> :
                    <IconButton mode='outlined' containerColor="#ff8929" icon='pencil' size={45}
                    style={{ justifyContent: 'center', alignSelf: 'center', borderColor: '#404252', borderWidth: 4 }} onPress={() => {
                            handleEdit()
                    }} />
                    }
            </Card>
            </View>
        
        
)
}
export default OpcionNueva