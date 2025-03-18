import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  // const [hasSeenOnboarding, setHasSeenOnboarding] = useState(null);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);


  // Kiểm tra trạng thái onboarding
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem('hasSeenOnboarding');
      setHasSeenOnboarding(value === 'true');
    };
    checkOnboardingStatus();
  }, []);

  // Ẩn splash screen khi font đã tải xong
  useEffect(() => {
    if (loaded && hasSeenOnboarding !== null) {
      SplashScreen.hideAsync();
    }
  }, [loaded, hasSeenOnboarding]);

  // Chờ font và trạng thái onboarding
  if (!loaded || hasSeenOnboarding === null) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Stack initialRouteName={hasSeenOnboarding ? '(tabs)' : 'onboarding'}> */}
      <Stack initialRouteName="onboarding"> {/* Luôn bắt đầu từ onboarding */}
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}