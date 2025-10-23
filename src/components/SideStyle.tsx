import { View } from "@react-pdf/renderer";
import CheckmarkIcon from "./CheckmarkIcon";

const SideStyle = () => (
  <View
    style={{
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    }}
  >
    <CheckmarkIcon style={{ width: 20, height: 20 }} />

    <View
      style={{
        borderLeft: "1px solid #E7E5E4",
        flexGrow: 1,
        marginTop: 4,
      }}
    />
  </View>
);

export default SideStyle;
