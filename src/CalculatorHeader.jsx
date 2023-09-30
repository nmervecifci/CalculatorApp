import React, { Component } from 'react'
import { Text, View } from 'react-native'

// CLASS COMPONENT
export default class CalculatorHeader extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
    }
    // BIND
  }


  // RENDER
  render() {
    // destructing object
    const {headerTextData,appVersion}=this.props

    // RETURN
    return (
      <View>
        {/* {this.props.headerTextData} */}
        <Text>{headerTextData} - {appVersion}</Text>
        </View>
    )
  }
}