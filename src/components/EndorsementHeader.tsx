import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";

interface EndorsementHeaderProps {
  title: string;
  role: string;
}

const EndorsementHeader = ({ title, role }: EndorsementHeaderProps) => (
  <View style={styles.endorsementHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.dateRange}>{role}</Text>
  </View>
);

export default EndorsementHeader;
