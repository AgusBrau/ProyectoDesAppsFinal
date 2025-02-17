import { View} from "react-native";
import { IconButton} from "react-native-paper";
export default function Decision({navigation}) {
    return(
<View style={{flex: 1,
    backgroundColor: '#ff8929',
    alignItems: 'center',
    justifyContent: 'center'}}>
            <IconButton mode='contained-tonal' containerColor="#ff8929" icon={'clover'} size={80}></IconButton>
            <IconButton mode='contained-tonal' containerColor="#ff8929" icon={'alarm'} size={80}></IconButton>
            <IconButton iconColor="#344dbf" icon="chevron-left-circle" size={60} onPress={ ()=>{navigation.goBack()}}></IconButton>
</View>
    )
}