import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";
import CheckmarkIcon from "./CheckmarkIcon";

interface HistoryItemProps {
  name: string;
  role: string;
  status: string;
  timestamp: string;
}

interface TimeLineDetailsProps {
  title: string;
  role: string;
  currentApprover: {
    name: string;
    role: string;
  };
  history: HistoryItemProps[];
}

const HistoryItem = ({ name, role, status, timestamp }: HistoryItemProps) => (
  <View style={styles.historyItem}>
    <View style={{ flexDirection: "column", gap: 4 }}>
      <Text style={styles.roleText}>
        {role} - <Text style={styles.nameText}>{name}</Text>{" "}
      </Text>
      <Text style={styles.dateRange}>{status}</Text>
    </View>
    <View style={styles.historyRight}>
      <Text style={styles.historyTime}>{timestamp}</Text>
    </View>
  </View>
);

const TimeLineDetails = ({
  title,
  role,
  currentApprover,
  history,
}: TimeLineDetailsProps) => (
  <View style={styles.endorsementSection}>
    {/* Endorsement Header */}
    <View style={styles.endorsementHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.dateRange}>{role}</Text>
    </View>

    {/* Approval Status */}
    <View style={styles.approvalStatus}>
      <Text style={styles.sectionTitle}>Approval Status</Text>
      <View style={styles.statusItem}>
        <CheckmarkIcon style={styles.statusDot} />
        <View style={{ flexDirection: "column", gap: 4 }}>
          <Text style={styles.roleText}>
            {currentApprover.role} -{" "}
            <Text style={styles.nameText}>{currentApprover.name}</Text>{" "}
          </Text>
          <Text style={styles.dateRange}>{currentApprover.role}</Text>
        </View>
      </View>

      {/* Approval History */}
      <View style={styles.historySection}>
        <Text style={styles.historyTitle}>Approval History</Text>
        <View style={{ flexDirection: "column", gap: 6 }}>
          {history.map((item, index) => (
            <HistoryItem key={index} {...item} />
          ))}
        </View>
      </View>
    </View>
  </View>
);

export default TimeLineDetails;
