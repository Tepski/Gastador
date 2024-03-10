import { ColorValue } from "react-native";

interface ColorsProps {
  text: ColorValue;
  background: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  accent: ColorValue;
}

const Colors: ColorsProps = {
  text: "#0d0c10",
  background: "#f5f5f7",
  primary: "#817b98",
  secondary: "#c3b4b1",
  accent: "#b0aa99",
};

export default Colors;
