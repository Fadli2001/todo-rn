import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({title,onPress, btnStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
        <Text>
            {title}
        </Text>
    </TouchableOpacity>
  )
}
