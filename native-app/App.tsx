import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps } from './shared/token';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>PurpleSchool</Text>
        
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Password' />
          <Button title="Войти" />
        </View>
        
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    width: 200,
    alignItems: 'stretch',
    gap: Gaps.g16,
  },
});
