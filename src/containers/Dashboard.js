import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from "react-native"
import { connect } from "react-redux"
import { decrement, increment } from "../store/actions"

const Dashboard = (props) => {
  const [text, setText] = useState(props.text)

  // useEffect(() => {
  // setText(props.text)
  // }, [])

  const { counter, increment, decrement } = props
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{ fontSize: 20 }}
        multiline
      >
      </TextInput>
      <Text style={{ paddingVertical: 10 }}>Counter: {counter}</Text>
     <Button onPress={increment} title="Increment"/>
     <Button onPress={decrement} title="Decrement"/>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

