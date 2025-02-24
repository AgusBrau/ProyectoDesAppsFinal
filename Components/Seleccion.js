import { View, Modal, Text } from "react-native"
import { IconButton } from "react-native-paper"

const Seleccion = () => {
    
return (
    <View style={{backgroundColor: "#ff8929",alignContent:'space-around', flex:1, flexDirection:'row'}}>
        <View style={{
                backgroundColor: '#ff8929', justifyContent: 'center', height: 100, paddingLeft:12, borderRadius:5,
                alignItems: 'center', flex: 1, flexDirection: 'row', borderColor:'#404252',borderWidth:2, margin:4
            }}>
                <Text style={{fontSize:20}}>{'OPCION '}</Text>
                <IconButton size={50} icon={'chevron-down-circle'}></IconButton>
                <Modal transparent={true} visible={false} animationType="fade" >
                <IconButton size={70} icon={'chevron-up-circle'}></IconButton>
                </Modal>
        </View>
    </View>  
)}
export default Seleccion