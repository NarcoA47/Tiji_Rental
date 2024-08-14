

import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SaveProfileButton } from '@/components/button'
import { EditProfileMainNavigation } from '@/components/navigation/topNavigation'
import EditProfileForm from '../components/profile/form'

function EditProfileScreen() {
  return (
    <ScrollView>

        <View>
            <EditProfileMainNavigation/>
            <EditProfileForm/>
            <SaveProfileButton/>
        </View>
    </ScrollView>
  )
}

export default EditProfileScreen;