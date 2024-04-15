import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='justify-center w-full min-h-[85vh] px-4 my-6 '>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='mt-10 text-2xl text-white font-psemibold'>Sign Up to Aora</Text>
          <FormField title='Username' value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} otherStyles='mt-7' keyboardType='username' />
          <FormField title='Email' value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} otherStyles='mt-7' keyboardType='email-address' />
          <FormField title='Password' value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles='mt-7' keyboardType='password' />
          <CustomButton containerStyles='mt-7' isLoading={isSubmitting} handlePress={submit}>
            Sign Up
          </CustomButton>
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-white font-pregular'>Already have account?</Text>
            <Link href='/sign-in' className='text-lg text-secondary font-psemibold'>
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
