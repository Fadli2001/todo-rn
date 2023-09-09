import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1,        
        backgroundColor : '#f7f7f7',        
    },
    headerSection : {
        flex : 1,        
        justifyContent : 'center', 
        alignContent : 'center'
    },
    formSection : {
        paddingHorizontal : 5,
        flex : 1,        
        justifyContent : 'center',          
    },
    listSection : {
        flex : 4,                    
    },
    tabBarSection : {
        flex : 1,
        justifyContent : 'flex-end',           
    }
})


export default styles