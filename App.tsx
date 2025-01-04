import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from './shared/Input/input';
import { Colors, Gaps } from './shared/token';
import { Button } from './shared/Button/button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logotype}>
          <Image 
            style={styles.logo}
            source={require('./assets/icon.png')}
            resizeMode='contain'
          />
          <Text style={{color: 'white'}}>PurpleSchool</Text>
        </View>
        
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Password' />
          <Button 
            text="Войти"
          />
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
    width: 300,
    alignItems: 'stretch',
    gap: Gaps.g16,
  },
});
