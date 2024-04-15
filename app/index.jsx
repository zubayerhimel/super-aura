import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='flex-1 flex items-center justify-center'>
      <Text className='text-3xl text-pink-600'>Hello there Aura</Text>
      <Link href='/profile' style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}
