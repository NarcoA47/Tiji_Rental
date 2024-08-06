import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/otp/imageBanner';
import OtpTextManage from '../components/otp/textManage';
import OtpInputField from '../components/otp/otpInputField';
import { Continue } from '@/components/button';
import FinalTextManager from '../components/otp/finalTextManager';

function OTP() {
  return (
    <View>
      <ImageBanner/>
      <OtpTextManage/>
      <OtpInputField/>
      <Continue/>
      <FinalTextManager/>
    </View>
  )
}

export default OTP
