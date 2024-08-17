import Naviagtion from "@/components/navigation/topNavigation";
import React from "react";
import { Text, View} from 'react-native'
import PasswordText from "../components/password/passwordText";
import PasswordForms from "../components/password/forms";
import { PasswordButton } from "@/components/button";

function ForgetPasswordScreen() {
    return (
        <View>
            <Naviagtion/>
            <PasswordForms/>
            {/* <PasswordText/> */}
            <PasswordButton/>
        </View>
    )
}

export default ForgetPasswordScreen