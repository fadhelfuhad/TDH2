import type { ReactNode } from "react";
import {
  Text,
  TouchableHighlight,
  View,
  type TouchableHighlightProps,
} from "react-native";

type TButtonWithIcon = {
  color?: string;
  textColor?: string;
  icon: ReactNode;
  text: string;
};
function ButtonWithIcon(
  props: TButtonWithIcon & Omit<TouchableHighlightProps, "value">,
) {
  return (
    <TouchableHighlight {...props}>
      <View
        className={`space-x-2 p-3 ${
          props.color ?? "bg-secondary-main"
        } rounded flex-row justify-center items-center `}
      >
        {props.icon}
        <Text
          className={
            props.textColor ?? "text-white text-center font-bold text-[14px]"
          }
        >
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default ButtonWithIcon;