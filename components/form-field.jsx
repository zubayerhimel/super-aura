import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='flex-row items-center w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary'>
        <TextInput
          className='flex-1 text-base text-white font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChange={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
