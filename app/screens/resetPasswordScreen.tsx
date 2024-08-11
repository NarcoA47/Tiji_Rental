import Naviagtion from "@/components/navigation/topNavigation";
import React from "react";
import { Text, View} from 'react-native'
import { PasswordButton, ResetPasswordButton } from "@/components/button";
import ResetPasswordForms from "../components/resetpassword/forms";

function ResetPasswordScreen() {
    return (
        <View>
            <Naviagtion/>
            <ResetPasswordForms/>
            <ResetPasswordButton/>
        </View>
    )
}

export default ResetPasswordScreen