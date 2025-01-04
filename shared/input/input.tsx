import React from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Radius } from "../token";
import { useState } from "react";
import EyeOpenedIcon from "../../assets/icons/eyeOpened";
import EyeClosedIcon from "../../assets/icons/eyeClosed";

export function Input({isPassword, ...props}: TextInputProps & { isPassword?: boolean }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  return (
    <View>
      <TextInput 
        style={styles.input}
        secureTextEntry = {isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
        {...props} 
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible((prevState) => !prevState)} 
          style={styles.eyeIcon}>
            {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    fontSize: 16,
    color: Colors.gray
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 18
  }
})