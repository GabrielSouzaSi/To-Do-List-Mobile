import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.COLORS.GRAY[500],
        borderRadius: 8,
        alignItems: "center" 
    },
    check: {
        paddingHorizontal: 12,
        paddingVertical: 16
    },
    label: {
        flex: 1,
        color: theme.COLORS.GRAY[100],
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        // textDecorationLine: "line-through"
    },
    trash: {
        paddingHorizontal: 12,
        paddingVertical: 16
    }
})