import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/custom-button";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='items-center justify-center w-full h-full px-4'>
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
          <View className='relative mt-5'>
            <Text className='text-3xl text-center text-white font-pbold'>
              Discover Endless Possibilities with <Text className='text-secondary-200 '>Aora</Text>{" "}
            </Text>
            <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-8' resizeMode='contain' />
          </View>
          <Text className='text-center text-white font-pregular mt-7'>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
          <CustomButton handlePress={() => {}} containerStyles='w-full mt-7'>
            Continue with Email
          </CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
