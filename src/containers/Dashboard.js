import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"

const Dashboard = (props) => {
  const [text, setText] = useState(props.text)

  // useEffect(() => {
    // setText(props.text)
  // }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{ fontSize: 20 }}
        multiline
      >
      </TextInput>
    </View>
  )
}

export default Dashboard

