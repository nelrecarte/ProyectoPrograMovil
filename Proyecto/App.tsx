import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Login/Login';

export default function App() {
  return (
    <>
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}