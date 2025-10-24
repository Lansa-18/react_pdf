import { Document, Page, Text, View, Image, Font } from "@react-pdf/renderer";
import { styles } from "../styles/interCompanyStyles";
import nnpcLogo from "/new-nnpc-logo.png";
import SideStyle from "./SideStyle";
import TimeLineDetails from "./TimeLineDetails";
import UploadDetails from "./UploadDetails";

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
        <View style={{ flexDirection: "row", gap: 10 }} wrap={false}>
          <SideStyle />
          <TimeLineDetails
            title="Endorsement by MD of BU"
            role="Managing Director"
            approvers={[
              {
                name: "Daniel Olusegun",
                role: "Managing Director",
                secondRole: true,
              },
            ]}
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

        <View style={{ flexDirection: "row", gap: 10 }} wrap={false}>
          <SideStyle />
          <TimeLineDetails
            title="Review by CAD team"
            role="CAD Representative"
            approvers={[
              {
                name: "Daniel Olusegun",
                role: "CAD Representative",
                secondRole: true,
              },
            ]}
            history={[
              {
                name: "Daniel Olusegun",
                role: "CAD Representative",
                status: "Update legal requirement",
                timestamp: "10:09am | 16th Oct, 2025",
              },
              {
                name: "Daniel Olusegun",
                role: "CAD Representative",
                status: "Looks good",
                timestamp: "10:18am | 16th Oct, 2025",
              },
            ]}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10 }} wrap={false}>
          <SideStyle />
          <TimeLineDetails
            title="Review by CF team"
            role="Financial Controller, Chief Strategy and Sustainability Officer, Chief Tax Management Officer, General Counsel"
            approvers={[
              {
                name: "Daniel Olusegun",
                role: "Chief Strategy and Sustainability Officer",
                secondRole: false,
              },
              {
                name: "Daniel Olusegun",
                role: "Chief Tax Management Officer",
                secondRole: false,
              },
              {
                name: "Daniel Olusegun",
                role: "Financial Controller",
                secondRole: false,
              },
              {
                name: "Daniel Olusegun",
                role: "General Counsel",
                secondRole: false,
              },
            ]}
            history={[
              {
                name: "Tete Owoicho",
                role: "Financial Controller",
                timestamp: "8:45am | 17th Oct, 2025",
              },
              {
                name: "Tete Owoicho",
                role: "General Counsel",
                status: "Approved",
                timestamp: "9:12am | 17th Oct, 2025",
              },
              {
                name: "Daniel Olusegun",
                role: "Chief Strategy and Sustainability Officer",
                status: "Looks good",
                timestamp: "3:39pm | 17th Oct, 2025",
              },
              {
                name: "Tete Owoicho",
                role: "Chief Tax Management Officer",
                status: "Proceed",
                timestamp: "9:03am | 18th Oct, 2025",
              },
            ]}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10 }} wrap={false}>
          <SideStyle />
          <TimeLineDetails
            title="Approval by GCEO"
            role="Group Chief Executive Officer"
            approvers={[
              {
                name: "Daniel Olusegun",
                role: "Group Chief Executive Officer",
                secondRole: false,
              },
            ]}
            history={[
              {
                name: "Daniel Olusegun",
                role: "Group Chief Executive Officer",
                status: "Proceed",
                timestamp: "10:02am | 18th Oct, 2025",
              },
            ]}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10 }} wrap={false}>
          <SideStyle />

          <UploadDetails />
        </View>
      </View>
    </Page>
  </Document>
);

export default InterCompanyLoan;
