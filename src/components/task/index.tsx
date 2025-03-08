import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

import { styles } from "./styles";
import theme from "../../styles/theme";

export function Task() {
    return (
        <View style={{ gap: 10 }}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.check}>
                    <FontAwesome5 name="circle" size={20} color={theme.COLORS.BLUE} />
                </TouchableOpacity>

                <Text style={styles.label}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio repellat
                </Text>

                <TouchableOpacity style={styles.trash}>
                    <FontAwesome5 name="trash-alt" size={20} color={theme.COLORS.GRAY[300]} />
                </TouchableOpacity>

            </View>

            <View style={styles.container}>

                <TouchableOpacity style={styles.check}>
                    <FontAwesome5 name="circle" size={20} color={theme.COLORS.BLUE} />
                </TouchableOpacity>

                <Text style={styles.label}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio repellat
                </Text>

                <TouchableOpacity style={styles.trash}>
                    <FontAwesome5 name="trash-alt" size={20} color={theme.COLORS.GRAY[300]} />
                </TouchableOpacity>

            </View>
        </View>
    )
}