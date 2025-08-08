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

// Getting the Montserra font from google fonts
// Font.register({
//   family: "Montserrat",
//   fonts: [
//     {
//       src: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
//       fontWeight: "normal",
//     },
//     {
//       src: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
//       fontWeight: "medium",
//     },
//     {
//       src: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
//       fontWeight: "semibold",
//     },
//     {
//       src: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
//       fontWeight: "bold",
//     },
//   ],
// });

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    padding: 40,
    // fontFamily: "Montserrat",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // fontFamily: "Montserrat",
  },
  underLine: {
    backgroundColor: "#000",
    border: "1px solid black",
    width: "100%",
    margin: "12 0 0 0",
    // fontFamily: "Montserrat",
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
    // fontFamily: "Montserrat",
  },
  section: {
    marginTop: 7,
    marginBottom: 5,
    lineHeight: 0.9,
    // fontFamily: "Montserrat",
  },
  bold: {
    fontWeight: "bold",
    // fontFamily: "Montserrat",
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
    // fontFamily: "Montserrat",
  },
});

const MyMemo2 = () => (
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
          <Text>H.TM/LDS/024</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", width: 50 }}>Date:</Text>
          <Text>17th September, 2024</Text>
        </View>
      </View>

      <View style={styles.underLine}></View>

      <View>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>
          CAS CAPACITY DEVELOPMENT
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        CONFIRMATION OF NOMINATION: CONTRACT ADMINISTRATION & SUPPLY CHAIN
        MANAGEMENT
      </Text>

      {/* Body */}
      <Text style={styles.section}>
        This is to inform you that Management has approved your participation in
        the above-named program. The program is being organized by{" "}
        <Text style={styles.bold}>CAS</Text> in conjunction with{" "}
        <Text style={styles.bold}>CGSK PARTNERSHIP & DEVELOPMENT LIMITED.</Text>
      </Text>

      <View>
        <Text>At the end of the course, participants should be able to:</Text>
      </View>

      <View style={{ paddingLeft: 15 }}>
        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          - Identify ethnical considerations involved in all procurement
          assignment.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          - Adhere strictly to due process in contract administration.{" "}
        </Text>
        <Text style={{ marginBottom: 10 }}>
          - Establish sustainable internal control mechanisms and checks.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          - Apply best practices principles in official transactions to earn
          stakeholders’ confidence.
        </Text>
        <Text>
          - Discover the causes and effects of unethical practices in the
          workplaces.
        </Text>
      </View>

      <Text style={{ marginTop: 10 }}>
        Please pay attention to the following details:
      </Text>
      <View style={{ margin: "10 0", paddingLeft: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Course Code:</Text>
          <Text>CAS002</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", width: 90 }}>Venue:</Text>
          <View style={{ flex: 1 }}>
            <Text wrap={true}>
              Vantage Hub Convention and Training Center, Mosesola House, 103,
              Allen Avenue, Ikeja, Lagos
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Date:</Text>
          <Text>14th to 18th October, 2024</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Duration:</Text>
          <Text>Five (5) days</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Time:</Text>
          <Text>8:30 a.m. daily</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", width: 90 }}>Course Fee:</Text>
          <Text>NGN 450,000 (To be paid at the venue)</Text>
        </View>
      </View>

      {/* Follow-up */}
      <Text style={styles.section}>
        Where applicable, kindly take appropriate touring advance to cover
        course fee, accommodation, feeding and transportation for the training
        period.
      </Text>

      <Text style={styles.section}>
        Upon completion of the program, kindly scan the QR code below or click
        here to upload your certificate and to fill the End of Course Evaluation
        form not later than two weeks after program, to make our process
        improvement even more effective and engaging.
      </Text>

      <Text style={styles.section}>
        For further information, kindly contact{" "}
        <Text style={styles.bold}>Rachel D. Nevo</Text> on GSM:
        <Text style={styles.bold}>+23480169414906;</Text> Ext.:{" "}
        <Text style={styles.bold}>83969</Text> or Email:
        <Link>rachel.nevo@nnpcgroup.com</Link> or
        <Text style={styles.bold}> Muhammad G. Sabo</Text> on{" "}
        <Text style={styles.bold}>+2348038314050;</Text> Ext.:{" "}
        <Text style={styles.bold}>81166</Text> or email:{" "}
        <Link>muhammad.sabo@nnpcgroup.com</Link>.
      </Text>

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

export default MyMemo2;
