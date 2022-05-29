import { useState } from "react";

import { View, TextInput, StyleSheet, Button } from "react-native";


export default function GoalInput({inputText, addGoals}){
    
    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your Course Goals' style={styles.textInput} onChangeText={inputText} />
            <Button title='Add Goal' onPress={addGoals}/>
        </View>
    )

}

const styles = StyleSheet.create({
    textInput: {
        width: '70%',
        borderColor: '#cccccc',
        borderWidth: 1,
        marginRight: 8,
        padding: 8,
    },
  inputContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 24,
  },
})