import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";
import CheckmarkIcon from "./CheckmarkIcon";

interface HistoryItemProps {
  name: string;
  role: string;
  status: string;
  timestamp: string;
}

interface ApproversListProps {
  name: string;
  role: string;
  secondRole: boolean;
}

interface TimeLineDetailsProps {
  title: string;
  role: string;
  approvers: ApproversListProps[];
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

const ApproversList = ({ role, name, secondRole }: ApproversListProps) => (
  <View style={styles.statusItem}>
    <CheckmarkIcon style={styles.statusDot} />

    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Text style={styles.roleText}>
        {role} - <Text style={styles.nameText}>{name}</Text>{" "}
      </Text>
      {secondRole && <Text style={styles.dateRange}>{role}</Text>}
    </View>
  </View>
);

const TimeLineDetails = ({
  title,
  role,
  approvers,
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
      <View style={{flexDirection: 'column', gap: 4}}>
        {approvers.map((item, index) => (
          <ApproversList key={index} {...item} />
        ))}
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
