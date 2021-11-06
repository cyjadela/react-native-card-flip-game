import React from "react";
//설치한 스택 네비게이션 라이브러리
import { createStackNavigator } from "@react-navigation/stack";
//페이지로 만든 컴포넌트
import GameScreen from "./src/components/screens/GameScreen";
import TotalCardScreen from "./src/components/common/TotalCardScreen"
//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙!
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="TotalCardScreen" component={TotalCardScreen} />
    </Stack.Navigator>
   )
}