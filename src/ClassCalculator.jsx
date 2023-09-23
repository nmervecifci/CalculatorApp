// REACT 
import React, { Component } from 'react'

// REACT NATIVE
import { StyleSheet, Text, View } from 'react-native'
// Class Component
class ClassCalculator extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  // RENDER
  render() {

    // RETURN
    return (
      <View style={styles.container}>
          <Text>Merhabalar</Text>
      </View>
    )
  }
}


// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',     // satır düzleminde (X)
    justifyContent: 'center', // sutun düzleminde (Y)
    flexDirection: 'column'
  },

});

// EXPORT
export default ClassCalculator