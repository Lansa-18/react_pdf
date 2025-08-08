import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import nnpcLogo from "/new-nnpc-logo.png";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  underLine: {
    backgroundColor: "#000",
    border: "1px solid black",
    width: "100%",
    margin: "12 0 0 0",
  },
  title: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  section: {
    marginTop: 7,
    marginBottom: 5,
    lineHeight: 0.9,
  },
  bold: {
    fontWeight: "bold",
  },
  table: {
    marginTop: 10,
    border: "1px solid black",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },
  tableCellHeader: {
    flex: 1,
    padding: 5,
    fontWeight: "bold",
    borderRight: "1px solid black",
  },
  tableCell: {
    flex: 2,
    padding: 5,
  },
  qrContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  qrCode: {
    width: 80,
    height: 80,
  },
  signature: {
    marginTop: 30,
  },
});

const MyMemo = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.bold}>INTERNAL MEMO</Text>
        <View style={{ width: 100 }}>
          <Image src={nnpcLogo} />
        </View>
      </View>

      {/* To / Date Section */}
      <View>
        <View style={{ flexDirection: "row", marginBottom: 1 }}>
          <Text style={{ fontWeight: "bold", width: 50 }}>To:</Text>
          <Text>JIMOH OLAITAN ABDULLATEEF (18918)</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 1 }}>
          <Text style={{ fontWeight: "bold", width: 50 }}>Thru:</Text>
          <Text>Head, CAS</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 1 }}>
          <Text style={{ fontWeight: "bold", width: 50 }}>Ref:</Text>
          <Text>HCM/TMD/OVS-Training/024</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", width: 50 }}>Date:</Text>
          <Text>8th April, 2025</Text>
        </View>
      </View>

      <View style={styles.underLine}></View>

      {/* Title */}
      <Text style={styles.title}>
        APPROVED OVERSEAS PROGRAMME: SUPPLY CHAIN ESSENTIALS AND INTERNATIONAL
        OIL TRADING AND PRICE RISK MANAGEMENT
      </Text>

      {/* Body */}
      <Text style={styles.section}>
        We are pleased to inform you that Management has approved your
        participation in the above-stated training being organized by{" "}
        <Text style={styles.bold}>IHRDC</Text>.
      </Text>

      <Text>Please pay attention to the following details:</Text>
      <View style={{ margin: "10 0", paddingLeft: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Course Code:</Text>
          <Text>CAS 051F</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Venue:</Text>
          <Text>London, UK</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Date:</Text>
          <Text>5th - 9th May, 2025</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Duration:</Text>
          <Text>5 days</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Fees:</Text>
          <Text>To be paid by NNPC Academy</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Sponsor:</Text>
          <Text>CAS</Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellHeader}>Estacode Allowance</Text>
          <Text style={styles.tableCell}>
            To be processed by F&A (5 program days, 2 travel days)
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellHeader}>Return Air Ticket</Text>
          <Text style={styles.tableCell}>
            To be processed by BSS, Corporate Admin Services
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellHeader}>Passport and Visa</Text>
          <Text style={styles.tableCell}>
            To be processed by Corporate Communications (where applicable)
          </Text>
        </View>
      </View>

      {/* Follow-up */}
      <Text style={styles.section}>
        On return from the programme, you are required to submit a report and a
        copy of your programme certificate not later than two weeks to Head,
        Talent Management. You can do so by scanning the QR code below.
      </Text>

      <Text style={styles.section}>
        Should you have any questions or require further clarification, please
        reach out to <Text style={styles.bold}>Morgan U. Okoli</Text> on
        <Text style={styles.bold}> +2348027872288;</Text> or email:{" "}
        <Link>morgan.okoli@nnpcgroup.com</Link>
      </Text>

      <Text>We wish you a pleasant learning experience.</Text>

      {/* Signature */}
      <View style={styles.signature}>
        <Text style={styles.bold}>AHMAD MUAZU</Text>
        <Text>for: Head, Talent Management</Text>
      </View>

      {/* QR Code */}
      {/* <View style={styles.qrContainer}>
        <Image src={qrCode} style={styles.qrCode} />
      </View> */}
    </Page>
  </Document>
);

export default MyMemo;
