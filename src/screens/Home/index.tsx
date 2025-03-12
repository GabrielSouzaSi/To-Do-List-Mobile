import React, { useState, useRef, useEffect } from "react"
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { Task } from "../../components/task"

import theme from "../../styles/theme"
import { styles } from "./styles"

import clipboard from "../../assets/clipboard.png"
import logo from "../../assets/logo.png"
import { Progress } from "../../components/progress"

type TASK = {
  id: number
  task: string
  checked: boolean
}

export default function Home() {
  const [taskList, setTaskList] = useState<TASK[]>([])
  const [sortedTasks, setSortedTasks] = useState<TASK[]>([])
  const [taskText, setTaskText] = useState("")
  const [totalTask, setTotalTask] = useState(0)
  const [countCompleted, setCountCompleted] = useState(0)

  const nextId = useRef(1)

  const updateTaskCounts = () => {
    setTotalTask(taskList.length)
    const completed = taskList.filter(task => task.checked).length
    setCountCompleted(completed)
  }

  // Função para verificar se uma tarefa já existe
  const taskExists = (taskToCheck: string) => {
    return taskList.some(task => task.task === taskToCheck)
  }

  // Função para adicionar uma nova tarefa
  function handleAddTask() {
    if (taskExists(taskText)) {
      return Alert.alert("⚠️ Tarefa já existe!")
    }

    if (taskText.trim() !== "") {
      setTaskList([
        ...taskList,
        { id: nextId.current, checked: false, task: taskText },
      ])
      nextId.current++
      setTaskText("")
    }
  }

  // Função para deletar uma tarefa
  const handleDeleteTask = (id: number) => {
    Alert.alert("⚠️⚠️⚠️", "Dejesa realmente remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTaskList(taskList.filter(task => task.id !== id))
        },
      },
      {
        text: "Não",
      },
    ])
  }

  // Função para alterar o estado de checked da tarefa
  const handleTaskChecked = (id: number) => {
    setTaskList(prevTaskList =>
      prevTaskList.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  useEffect(() => {
    const data = [...taskList].sort((a, b) => {
      if (a.checked === b.checked) return 0;
      return a.checked ? 1 : -1;
    });
    setSortedTasks(data);
    updateTaskCounts()
  }, [taskList])

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={logo} resizeMode="contain" />

      <View style={styles.newTask}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.COLORS.GRAY[300]}
          onChangeText={setTaskText}
          value={taskText}
        />

        <TouchableOpacity
          style={styles.addTask}
          onPress={() => handleAddTask()}
        >
          <View style={styles.circleTask}>
            <Text style={styles.addTaskText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.info}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.counter}>{totalTask}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.done}>Concluídas</Text>
          <Text style={styles.counter}>{countCompleted}</Text>
        </View>
      </View>

      {countCompleted > 0 && <Progress totalTasks={totalTask} completedTasks={countCompleted} />}

      <FlatList
        data={sortedTasks}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            data={item}
            onCheck={() => handleTaskChecked(item.id)}
            onDelete={() => handleDeleteTask(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.line}>
            <Image
              style={styles.logo}
              source={clipboard}
              resizeMode="contain"
            />
            <Text style={styles.emptyBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyRegular}>
              Crie tarefas e organize seus itens a faze
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 15, gap: 10 }}
        style={{marginTop: 10}}
      />
    </View>
  )
}
