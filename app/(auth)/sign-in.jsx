import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='justify-center w-full min-h-[85vh] px-4 my-6 '>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='mt-10 text-2xl text-white font-psemibold'>Log in to Aora</Text>
          <FormField title='Email' value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} otherStyles='mt-7' keyboardType='email-address' />
          <FormField title='Password' value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles='mt-7' keyboardType='password' />
          <CustomButton containerStyles='mt-7' isLoading={isSubmitting} handlePress={submit}>
            Sign In
          </CustomButton>
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-white font-pregular'>Don't have an account?</Text>
            <Link href='/sign-up' className='text-lg text-secondary font-psemibold'>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
