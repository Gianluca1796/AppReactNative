import DiaryScreen from './pages/DiaryScreen';
import StartScreen from './pages/StartScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import MainNavigation from './navigation/Index';

export default function App() {
  const [loaded] = useFonts({
    Indieregular: require('./assets/fonts/IndieFlower-Regular.ttf')
  })
  const [selectedDay, setSelectedDay] = useState()
  const handlerStartdiary = (day) => {
    setSelectedDay(day)
  }

  let content = <StartScreen onStartDiary={handlerStartdiary} />

  if (selectedDay) {
    content = <DiaryScreen />
  }
  if (!loaded) return <AppLoading />

  return (
    <MainNavigation />
  );
}
