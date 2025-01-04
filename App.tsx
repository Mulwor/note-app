import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps } from './shared/token';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logotype}>
          <Image 
            style={styles.logo}
            source={require('./assets/icon.png')}
          />
          <Text style={{color: 'white'}}>PurpleSchool</Text>
        </View>
        
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Password' />
          <Button title="Войти" />
        </View>
        
        <Text style={{color: 'white'}}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  logotype: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gaps.g16,
  },
  logo: {
    width: 24,
    height: 24,
  },
  form: {
    width: 200,
    alignItems: 'stretch',
    gap: Gaps.g16,
  },
});
