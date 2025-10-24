import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    fontFamily: "Montserrat",
    padding: 24,
  },
  endorsementSection: {
    flex: 1,
    width: "100%",
  },
  endorsementHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  sectionTitle: {
    fontSize: 12,
    color: "#6F6F6F",
    fontWeight: "600",
    fontStyle: "normal",
  },
  approvalStatus: {
    marginTop: 16,
    backgroundColor: "#F7F9FC",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  statusTitle: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 8,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
  },
  statusDot: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  roleText: {
    fontSize: 12,
    color: "#4CAF50",
  },
  nameText: {
    fontSize: 10,
    color: "#999",
    fontStyle: "normal",
    fontWeight: 500,
  },
  historySection: {
    marginTop: 24,
  },
  historyTitle: {
    fontSize: 12,
    color: "#6F6F6F",
    fontWeight: "600",
    fontStyle: "normal",
    marginBottom: 8,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#F0FDF4",
  },
  historyRole: {
    fontSize: 12,
    color: "#4CAF50",
  },
  historyName: {
    fontSize: 12,
    color: "#666666",
  },
  historyRight: {
    alignItems: "flex-end",
  },
  historyTime: {
    fontSize: 10,
    color: "#999999",
    marginBottom: 2,
  },
  historyStatus: {
    fontSize: 10,
    color: "#4CAF50",
  },
  textBase: {
    fontSize: 11,
    color: "#999",
    fontStyle: "normal",
    fontWeight: 500,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalLine: {
    borderBottom: "1px solid #E7E5E4",
    margin: "16 0",
  },
  headerRight: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  headerText: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    color: "#6F6F6F",
  },
  dateRange: {
    fontSize: 10,
    color: "#999",
    fontStyle: "normal",
    fontWeight: 500,
  },
  waitingText: {
    fontSize: 12,
    color: "#999",
    fontStyle: "normal",
    fontWeight: 500,
  },
});
