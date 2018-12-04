import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function TextButtom({ children, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}
