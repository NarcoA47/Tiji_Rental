import { EditProfile } from '@/components/button'
import { ProfileMainNavigation } from '@/components/navigation/topNavigation'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ListContainer from '../components/profile/List'

function ProfileScreen() {
  return (
    <ScrollView>

        <View>
            <ProfileMainNavigation/>
            <EditProfile/>
            <ListContainer/>
        </View>
    </ScrollView>
  )
}

export default ProfileScreen