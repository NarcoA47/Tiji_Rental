import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Menu, Provider } from 'react-native-paper'

export default function ConfirmHire() {

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <Menu 
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button title="Show Menu" onPress={openMenu} />
          }>
            <Menu.Item onPress={() => {}} title="Option 1" />
            <Menu.Item onPress={() => {}} title="Option 2" />
            <Menu.Item onPress={() => {}} title="Option 3" />
          </Menu>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})