import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";
import EndorsementHeader from "./EndorsementHeader";

const UploadDetails = () => (
  <View style={styles.endorsementSection}>
    <EndorsementHeader
      title="Upload Amortization Schedule"
      role="Treasury Representative"
    />

    <View
      style={[
        styles.approvalStatus,
        { borderLeft: "2px solid #D97706", flexDirection: "column", gap: 8 },
      ]}
    >
      <Text style={[styles.dateRange, { color: "#D97706" }]}>
        Waiting for Treasury Representative to approve.
      </Text>
      <Text style={styles.sectionTitle}>Approval Status</Text>
      <Text style={styles.waitingText}>Treasury Representative</Text>
    </View>
  </View>
);

export default UploadDetails;
