import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"

const Dashboard = (props) => {
  const [text, setText] = useState("hello world")


  // useEffect(() => {
  //   setText("Welcome")
  // }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{ fontSize: 50 }}
        multiline
      >
      </TextInput>
    </View>
  )
}

export default Dashboard

