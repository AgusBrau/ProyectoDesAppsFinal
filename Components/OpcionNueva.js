import { useState } from "react"
import { View } from "react-native"
import { Button, Card, Divider, IconButton, SegmentedButtons, TextInput } from "react-native-paper"


const OpcionNueva = (props) => {
    const [prosCons, setProsCons] = useState("")
    const [resultados, setResultados] = useState(false)
    const [inputPros, setInputPros] = useState("")
    const [inputCons, setInputCons] = useState("")
    const [inputResult, setInputResult] = useState("")

    return (
        <View style={{flex: 1,
    backgroundColor: '#ff8929',
    alignItems: 'center',
            justifyContent: 'center'
        }}>
        <Card style={{
            alignItems:'center',
            justifyContent: 'flex-start',
            flex: 1,
            backgroundColor: '#404252',
            flexDirection: 'column',
                margin: 50,
                flexWrap: 'wrap',
                width: 340,
            
        }}>
            <Card.Content><Card.Title title={"OPCION "+props.id} titleStyle={{ color: '#ff8929' }} /></Card.Content>
            <Card.Content>
                    <SegmentedButtons value={prosCons} onValueChange={setProsCons}
                        buttons={[{value: 'Pros', label: 'Pros', icon: 'magnify-plus', checkedColor: "#ff8929", uncheckedColor: "#ff8929", style:{width:100} },
                        {value: 'Cons', label: 'Cons', icon: 'magnify-minus', checkedColor: "#ff8929", uncheckedColor: "#ff8929" }
                        
                    ]}/>
                    <TextInput multiline={true} style={prosCons == 'Pros' ? { display: "flex", backgroundColor: '#50d977', } : { display: "none" }}
                        value={inputPros} onChangeText={(e) => { setInputPros(e) }}></TextInput>
                <Divider></Divider>
                    <TextInput multiline={true} style={prosCons == 'Cons' ? { display: "flex", backgroundColor: '#d95050', } : { display: "none" }}
                        value={inputCons} onChangeText={(e) => { setInputCons(e) }}></TextInput>
                <Button textColor="#404252" buttonColor="#ff8929" icon={'dots-horizontal'} onPress={()=>{setResultados(!resultados)
                    
                }}>Posibles resultados</Button>
                    <TextInput multiline={true} style={resultados ? { display: 'flex', } : { display: "none", color: '#fff' }}
                        value={inputResult} onChangeText={(e) => { setInputResult(e) }}></TextInput>
            </Card.Content> 
            </Card>
        <IconButton mode='contained-tonal' containerColor="#ff8929" icon='cube-send' size={45}
                style={{ justifyContent: 'center', alignSelf: 'center' }} onPress={() => {
                    props.handlerSubmit()}} />
            </View>
        
        
)
}
export default OpcionNueva