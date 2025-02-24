import { useEffect, useState } from "react";
import { Platform, View,Text} from "react-native";
import { IconButton } from "react-native-paper";
import * as Notifications from 'expo-notifications'
import TimeSlider from "../Components/TimeSlider";
import Seleccion from "../Components/Seleccion";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Decision({ navigation,route }) {
    const [tiempoState, setTiempoState] = useState({ int: 5, value: "5" })
    const [decisionesDisponibles, setDecisionesDisponibles] = useState(undefined)
    const cuantasDecisiones = route.params.id
    
    let mensaje = tiempoState
    const temporizador = Number(tiempoState.value) * 1000//60000 es en minutos

    Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
    });
    

    async function setScheduleNotification(tiempo) {
    let {value} = tiempo
  await Notifications.scheduleNotificationAsync({
      content: {
          title: "You've got notification! 🔔",
          body: value,
          data: { data: "notifData" },
          sound: Platform.OS === "android" ? null: "default"
      },
    trigger: {seconds:50},
  });
    }

    useEffect(() => {
        async function asyGet() {
            let getLength = await AsyncStorage.getAllKeys()
            return {Prop1: getLength}
        };
        asyGet().then(
            (value) => {
            let total=value.Prop1.length
            setDecisionesDisponibles(total)
            },
            (error) => console.log(error)
        )
    }, [cuantasDecisiones])



    const [randomNum, setRandomNum] = useState(undefined)
    useEffect(() => {
    const generateNum = (min,max) => {
    return Math.floor(Math.random() * (max-min+1)) + min
        }
        if(randomNum<0){
            let numeroObtenido = generateNum(1, decisionesDisponibles)
            setRandomNum(numeroObtenido)
            alert(numeroObtenido)
        }
    },[randomNum])

    const handleNum = () => { 
        setRandomNum(-1)
    }

    return(
<View style={{flex: 1,
    backgroundColor: '#ff8929',
            justifyContent: "space-around",
            flexDirection: 'column',
            borderWidth: 30,
            borderColor: '#ff8929',
            alignItems: "center",
        }}>
            <Seleccion numDecision={decisionesDisponibles}></Seleccion>
            <View style={{ top: 50 }}>
                <Text style={{
                    backgroundColor: '#404252', alignItems: 'center', borderRadius: 10, maxHeight: 40,
                     fontSize: 28, color: 'orange',top:80, maxWidth:238, right:5
                }}>Dejarlo a la suerte</Text>
            <IconButton mode='contained-tonal' containerColor="#ff8929" icon={'clover'} size={80}
                onPress={() => {
                    handleNum()
                    }} style={{alignSelf:'flex-end'}}></IconButton>
            <View style={{alignContent:'space-evenly', flexDirection:'row', alignItems:'center',marginHorizontal:0}}>
            <TimeSlider tiempo={tiempoState} cambiaTiempo={setTiempoState}></TimeSlider>
            <IconButton mode='contained-tonal' containerColor="#ff8929" icon={'alarm'} size={80}
                        onPress={() => { setTimeout(() => { setScheduleNotification(mensaje) }, temporizador) }}></IconButton>
            </View>
            </View>
            <View style={{top:20}}>
                <IconButton iconColor="#344dbf" icon="chevron-left-circle" size={80} onPress={() => {
                    navigation.goBack()
                }}></IconButton>
            </View>
</View>
    )
}