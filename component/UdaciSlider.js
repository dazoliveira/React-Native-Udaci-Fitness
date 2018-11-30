import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider({ value, step, unit, onChange, max }) {
    return (
        <View>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}