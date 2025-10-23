import { Document, Page, Text, View, Image, Font } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";
import nnpcLogo from "/new-nnpc-logo.png";
import SideStyle from "./SideStyle";
import TimeLineDetails from "./TimeLineDetails";

// Registering the font.
Font.register({
  family: "Montserrat",
  src: "http://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf",
});

const InterCompanyLoan = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <Image src={nnpcLogo} />
        </View>
        <View>
          <Text style={styles.headerText}>Audit Trail</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.textBase}>Loan Title</Text>
          <Text style={styles.textBase}>LR0023</Text>
          <Text style={styles.dateRange}>14/10/2023 - 18/10/2023</Text>
        </View>
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine}></View>

      <View style={{ flexDirection: "column", gap: 16 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <SideStyle />
          <TimeLineDetails
            title="Endorsement by MD of BU"
            role="Managing Director"
            currentApprover={{
              name: "Daniel Olusegun",
              role: "Managing Director",
            }}
            history={[
              {
                name: "Daniel Olusegun",
                role: "Managing Director",
                status: "Proceed",
                timestamp: "1:07pm | 15th Oct, 2025",
              },
              {
                name: "Daniel Olusegun",
                role: "Managing Director",
                status: "Proceed",
                timestamp: "2:14pm | 15th Oct, 2025",
              },
            ]}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <SideStyle />
          <TimeLineDetails
            title="Endorsement by MD of BU"
            role="Managing Director"
            currentApprover={{
              name: "Daniel Olusegun",
              role: "Managing Director",
            }}
            history={[
              {
                name: "Daniel Olusegun",
                role: "Managing Director",
                status: "Proceed",
                timestamp: "1:07pm | 15th Oct, 2025",
              },
              {
                name: "Daniel Olusegun",
                role: "Managing Director",
                status: "Proceed",
                timestamp: "2:14pm | 15th Oct, 2025",
              },
            ]}
          />
        </View>
      </View>
    </Page>
  </Document>
);

export default InterCompanyLoan;
