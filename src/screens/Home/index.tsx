import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { Loading } from "../../components/Loading";

import { styles } from "./styles";
import theme from "../../styles/theme";

import logo from "../../assets/logo.png"
import clipboard from "../../assets/clipboard.png"
import { Task } from "../../components/task";

export default function Home() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image style={styles.logo} source={logo} resizeMode="contain" />

      <View style={styles.newTask}>

        <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor={theme.COLORS.GRAY[300]} />

        <TouchableOpacity style={styles.addTask}>
          <View style={styles.circleTask}>

            <Text style={styles.addTaskText}>+</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.info}>

        <View style={styles.info}>
          <Text style={styles.created}>
            Criadas
          </Text>
          <Text style={styles.counter}>
            0
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.done}>
            Concluídas
          </Text>
          <Text style={styles.counter}>
            0
          </Text>
        </View>

      </View>

      <View style={styles.line} >
      <Image style={styles.logo} source={clipboard} resizeMode="contain" />
        <Text style={styles.emptyBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyRegular}>
          Crie tarefas e organize seus itens a faze
        </Text>
      </View>

      <Task />

    </View>
  );
}