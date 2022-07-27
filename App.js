import { StyleSheet, View } from 'react-native';
import Colors from './constants/colors'
import Header from './components/Header';
import DiaryScreen from './pages/DiaryScreen';
import StartScreen from './pages/StartScreen';
import { useState } from 'react';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import IndexNavigation from './navigation/IndexNavigation';

export default function App() {
  const [loaded] = useFonts({
    Indieregular: require('./assets/fonts/IndieFlower-Regular.ttf')
  })
  const [selectedDay, setSelectedDay] = useState()
  const handlerStartdiary = (day) => {
    setSelectedDay(day)
  }
  let content = <StartScreen onStartDiary = {handlerStartdiary}/>
  
  if(selectedDay){
    content = <DiaryScreen/>
  }
  if(!loaded) return <AppLoading/>

  return (
    <IndexNavigation />
    // <View style={styles.background}>
    //   <Header title={"Lista de tareas"} />
    //   {content}
    // </View>
  );
}
