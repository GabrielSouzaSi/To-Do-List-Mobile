import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{color: "#F2F2F2"}}>To-Do List</Text>
    </View>
  );
}