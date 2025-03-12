import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

import { styles } from "./styles";
import theme from "../../styles/theme";

type TASK = {
    checked: boolean;
    task: string;
}

type Props = {
    data: TASK;
    onCheck: () => void;
    onDelete: () => void;
}

export function Task({ data, onCheck, onDelete }: Props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.check, data.checked && {}]} onPress={() => onCheck()}>
                <FontAwesome5
                    name={data.checked ? "check-circle" : "circle"}
                    size={20}
                    solid={data.checked}
                    color={data.checked ? theme.COLORS.PURPLE : theme.COLORS.BLUE}
                />
            </TouchableOpacity>

            <Text style={[styles.label, data.checked && styles.completed]}>
                {data.task}
            </Text>

            <TouchableOpacity style={styles.trash} onPress={() => onDelete()}>
                <FontAwesome5 name="trash-alt" size={20} color={theme.COLORS.GRAY[300]} />
            </TouchableOpacity>

        </View>
    )
}