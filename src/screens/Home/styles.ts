import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: "center"
  },
  newTask: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 30
  },
  input: {
    flex: 1,
    height: 52,
    marginRight: 4,
    backgroundColor: theme.COLORS.GRAY[500],
    color: theme.COLORS.GRAY[100],
    borderColor: theme.COLORS.GRAY[700],
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  addTask: {
    width: 52,
    height: 52,
    backgroundColor: theme.COLORS.BLUE_DARK,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  circleTask: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.COLORS.GRAY[100]
  },
  addTaskText: {
    color: theme.COLORS.GRAY[100],
    borderColor: theme.COLORS.GRAY[100],
    fontSize: 11,
    fontWeight: "700"
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6
  },
  created: {
    color: theme.COLORS.BLUE,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: "bold"
  },
  done:{
    color: theme.COLORS.PURPLE,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: "bold"
  },
  counter: {
   backgroundColor: theme.COLORS.GRAY[400],
   color: theme.COLORS.GRAY[200],
   fontFamily: theme.FONT_FAMILY.BOLD,
   fontSize: theme.FONT_SIZE.SM,
   fontWeight: "bold",
   paddingHorizontal: 8,
   paddingVertical: 2,
   borderRadius: 999
  },
  line: {
    borderTopColor: theme.COLORS.GRAY[300],
    borderTopWidth: StyleSheet.hairlineWidth, 
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    paddingVertical: 48
  },
  emptyBold: {
    color: theme.COLORS.GRAY[300],
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "bold"
  },
  emptyRegular: {
    color: theme.COLORS.GRAY[300],
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "regular"
  }
});
