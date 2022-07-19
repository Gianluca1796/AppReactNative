import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const CustomModal = (props) => {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem, completedItem } = props


    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        {completedItem ? 
                        <Text> Felicitaciones! </Text>
                        :
                        <Text> Bienvenido! </Text>
                        }
                    </View>
                    <View style={styles.modalMessage}>
                            {completedItem ? <Ionicons name="md-checkmark-circle" size={32} color="green" /> : 
                            <Text> ¿Que accíon deseas realizar?</Text>} 
                    </View>
                    <View style={styles.Message}>
                        {completedItem ? 
                        <Text>Tarea completada!</Text>
                        :
                        <Text style={styles.Message}>{itemSelected.value}</Text>
                        }
                    </View>
                    <View style={styles.modalButton}>
                        <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Borrar' />
                        <Button onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Marcar como realizado' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        width: '80%',
        height: '50%',
        borderRadius: 10,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    modalTitle: {
        color: 'white',
        fontSize: 18,
    },
    modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalItem: {
        fontSize: 30
    }
})

export default CustomModal;