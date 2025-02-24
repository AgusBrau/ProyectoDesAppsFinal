import { Text, TouchableHighlight, View } from "react-native"

const TimeSlider = ({tiempo,cambiaTiempo}) => {
    let textoTiempo = tiempo.value
    return(
    <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#404252', alignItems:'center',borderRadius:10,maxHeight:40,marginRight:30}}>
            <TouchableHighlight hitSlop={30} onPress={() => {
                tiempo.int >1 ?
                cambiaTiempo({
                    int: tiempo.int -= 1,
                    value: tiempo.int.toString()
                }):""
            }}><Text style={{ fontSize: 30, color: 'orange', }}>⪡</Text></TouchableHighlight>
    <Text style={{fontSize:30,color:'orange'}}>  {textoTiempo} Minutos  </Text>
            <TouchableHighlight hitSlop={30} onPress={() => {
                tiempo.int <10 ?
                cambiaTiempo({
                    int: tiempo.int += 1,
                    value: tiempo.int.toString()
                }):""
            }}><Text style={{ fontSize: 30, color: 'orange' }}>⪢</Text></TouchableHighlight>
    </View>)

}
export default TimeSlider