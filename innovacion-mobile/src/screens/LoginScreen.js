import { View, Text, Button } from 'react-native';
import api from '../api/client';
import socket from '../api/socket';

export default function LoginScreen() {
  const testAPI = async () => {
    const res = await api.get('/status');
    console.log(res.data);
  };

  const testSocket = () => {
    socket.emit('ping', { msg: 'Hola desde Expo' });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Test API" onPress={testAPI} />
      <Button title="Test Socket" onPress={testSocket} />
    </View>
  );
}
