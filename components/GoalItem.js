import {StyleSheet, View, Text, Pressable} from 'react-native';


export default function GoalItem({goal, deleteItem}){
    return (

        <Pressable onPress={deleteItem.bind(this, goal)}>
            <View style={styles.textStyling}>
                <Text style={styles.text}>{goal}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    textStyling: {
        backgroundColor : "#202120",
        borderRadius: 6,
        padding: 10,
        marginVertical: 3,
    },
    text:{
        color: "#fff",
    }
})