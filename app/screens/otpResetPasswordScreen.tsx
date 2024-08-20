import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/otp/imageBanner';
import OtpTextManage from '../components/otp/textManage';
import OtpInputField from '../components/otp/otpInputField';
import { Continue } from '@/components/button';
import FinalTextManager from '../components/otp/finalTextManager';
import OtpInputFieldResetPassword from '../components/otp/otpresedpasscodeInputField';

function OTPResetPassword() {
  return (
    <View>
      <ImageBanner/>
      <OtpTextManage/>
      <OtpInputFieldResetPassword></OtpInputFieldResetPassword>
      <Continue/>
      <FinalTextManager/>
    </View>
  )
}

export default OTPResetPassword
