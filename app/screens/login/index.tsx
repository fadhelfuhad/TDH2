// import { StackNavigationProp } from '@react-navigation/stack';
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import { OnBoardingStackList } from "@/types";
import Screen from "@/components/Screen";
import { useTheme } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { ErrorText } from "@/components/ErrorText";
import { router, Stack } from "expo-router";

export default function Login() {
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  const onSubmit = async (data: any) => {
    router.push("/(tabs)/");
  };

  const navigateToRegister = () => {
    router.push("/screens/register/");
  };

  return (
    <View style={styles.screen}>
      <Stack.Screen
        options={{
          //   headerStyle: { backgroundColor: "#003867" },
          //   headerTitle: () => <LogoTitle />,
          //   headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <ImageBackground
        source={require("@/assets/images/login.png")}
        style={styles.image}
      >
        <View style={styles.row}>
          <AntDesign name="mail" size={20} color="black" />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Email"
                value={value}
                keyboardType="email-address"
              />
            )}
            name="identifier"
          />
        </View>
        {errors.identifier && <ErrorText>Email is required.</ErrorText>}
        <View style={[styles.row, styles.topspace]}>
          <Ionicons name="key-outline" size={20} color="black" />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                textContentType="password"
                placeholder="Password"
                secureTextEntry={true}
              />
            )}
            name="password"
          />
        </View>
        {errors.password && <ErrorText>Password is required</ErrorText>}
        <Pressable
          style={[styles.button, { backgroundColor: "white" }]}
          android_ripple={{ color: colors.border }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <View style={styles.registerWrapper}>
          <Text>Don't have an account?</Text>
          <Pressable style={styles.registerButton} onPress={navigateToRegister}>
            <Text
              style={[
                styles.registerButtonText,
                { borderBottomColor: colors.primary },
              ]}
            >
              Register Now
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    paddingStart: 16,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#F1EFF5",
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 200,
    maxWidth: 300,
    marginLeft: 40,
  },
  topspace: {
    marginTop: 35,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    marginTop: 35,
    maxWidth: 300,
    marginLeft: 42,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#000",
  },
  registerWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
    opacity: 0,
  },
  registerButton: {
    marginTop: 6,
  },
  registerButtonText: {
    fontSize: 16,
    borderBottomWidth: 1,
  },
});
