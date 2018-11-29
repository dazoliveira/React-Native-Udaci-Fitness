import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import UdaciSlider  from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'

export default class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }

    increment = (metric) => {
        const { step, max } = getMetricMetaInfo(metric)

        this.setState(state => {
            const count = state.metric + step
            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }

    dencrement = (metric) => {

        this.setState(state => {
            const count = state.metric - getMetricMetaInfo(metric).step
            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    render() {

        const metainfo = getMetricMetaInfo()

        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()} />
                {Object.keys(metainfo).map((key) => {
                    const { getIcon, type, ...rest } = metainfo[key]
                    const value  = this.state[key]

                    return(
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider'
                            ? <UdaciSlider
                                value={value}
                                onChange={(value) => this.slide(key, value)}
                                {...rest}
                            />
                            : <UdaciSteppers
                                value='steppers'
                                onIncrement={() => this.increment(key)}
                                onDecrement={()=> this.dencrement(key)}
                                {...rest}
                            />
                            }
                        </View>
                    )
                })}
            </View>
        )
    }
}