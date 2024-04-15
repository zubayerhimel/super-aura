import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ children, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}>
      <Text className={`text-lg text-primary font-psemibold ${textStyles}`}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
