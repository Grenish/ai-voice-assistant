import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white underline" >Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

