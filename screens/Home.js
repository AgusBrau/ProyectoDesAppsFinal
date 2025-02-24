import { FAB } from "@rneui/base";
import {useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Text, } from "react-native-paper";
import MenuOpciones from "../Components/MenuOpciones";
export default function Home({ navigation, route }) {
    const isScreenRendered = useRef({effect1:false})
    const [contador, setContador] = useState(0)
    const aumentarContador = () => { setContador((prevContador) => prevContador + 1) };
    const jsonOpcion = route.params
    useEffect(() => {
        if(isScreenRendered.current['effect1']){
        aumentarContador();
        }
        isScreenRendered.current["effect1"] = true
    },[jsonOpcion])
    
    return(
<View style={{flex: 1,
    backgroundColor: '#ff8929',
            justifyContent: "space-around",
            flexDirection: 'column',
            borderTopWidth: 10,
            borderColor: '#ff8929',
            alignItems: "center",
        }}>
            
            <View><Text variant="displayMedium" style={{ fontWeight: "bold", right: 15 }}> IndecisivApp</Text></View>
            <View>
            <MenuOpciones contador={contador} actualizarContador={setContador}></MenuOpciones>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30, }}>
            <FAB size='large' icon={{ name: 'add', color: '#ff8929', size: 25 }}
                buttonStyle={{ backgroundColor: "#404252", borderRadius: 30, }}
                titleStyle={{ color: '#ff8929',fontWeight:'bold', fontSize:20 }} title='Añadir Opciones'
                    onPress={() => { navigation.navigate('Opciones', { screen: 'Opciones', id: contador }) }}>
                
            </FAB>
            <FAB size='large' icon={{ name: 'done', color: '#13c23c', size: 25 }}
                buttonStyle={{ backgroundColor: "#404252", borderRadius: 30, }}
                titleStyle={{ color: '#13c23c',fontWeight:'bold', fontSize:20 }} title='Decidir'
                    onPress={() => {
                        navigation.navigate('Decision', { screen: 'Decision', id: contador})
                    }}>
            </FAB>
                </View>
            
</View>
    )
}