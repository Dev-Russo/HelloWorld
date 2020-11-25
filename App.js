import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  // const logar = () => {
  //   alert(`${email} ${senha}`);
  // }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>

      {/* <Text>Email</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        // React - onChange = {event => setEmail(event.target.value)} 
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Text>Senha</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        // React - onChange = {event => setEmail(event.target.value)} 
        onChangeText={text => setSenha(text)}
        value={senha}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
