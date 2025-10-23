import { Svg, Path } from "@react-pdf/renderer";

interface CheckmarkIconProps {
  style?: any;
}

const CheckmarkIcon = ({ style }: CheckmarkIconProps) => (
  <Svg viewBox="0 0 12 12" style={style}>
    <Path
      d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
      fill="#00B050"
      stroke="#00B050"
      strokeWidth="0.833333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.8999 6.5002L5.1999 7.8002L7.7999 5.2002"
      stroke="white"
      strokeWidth="0.833333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckmarkIcon;