import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/theme";
import { useEffect, useState } from "react";

type Props = {
    totalTasks: number
    completedTasks: number
}


export function Progress({ totalTasks, completedTasks }: Props) {
    const [progress, setProgress] = useState(0);

    const calculateCompletionPercentage = () => {
        if (totalTasks === 0) return
        let rounded = ((completedTasks / totalTasks) * 100)
        setProgress(Number(rounded.toFixed(2)));
    };

    useEffect(() => {
        calculateCompletionPercentage();
    })

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.progress,
                    { width: `${progress}%` }]}
            >
                <Text style={styles.label}>{progress}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 14,
        backgroundColor: theme.COLORS.GRAY[400],
        borderRadius: 10
    },
    progress: {
        height: "100%",
        backgroundColor: theme.COLORS.PURPLE,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        color: theme.COLORS.GRAY[200],
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: 10,
        fontWeight: "bold",
    }
})