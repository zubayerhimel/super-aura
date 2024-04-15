import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='flex items-center justify-center flex-1'>
      <Text className='text-3xl text-pink-600 font-pbold'>Hello there Aura</Text>
      <Link href='/home' style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
