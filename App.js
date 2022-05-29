import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredText, setEnteredText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function inputText(enteredText){
    setEnteredText(enteredText);
  } 

  function addGoals(){
    setCourseGoals( (currentText) => [...currentText, enteredText,] );
    setEnteredText('');
  }

  function onDeleteItem(enteredText){
    setCourseGoals( (currentCourse) => currentCourse.filter( (goal) => goal !== enteredText ) )
  }

  return (
    <View style={styles.appContainer}>
      
      <GoalInput inputText={inputText} addGoals={addGoals}/>

      <View style={styles.goalsContainer}>

        <ScrollView>

        { courseGoals.map((goal) => 

          <GoalItem key={goal} goal={goal} deleteItem={onDeleteItem}/>
        ) }


        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop: 52,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex: 5,
  },
});
