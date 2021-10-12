import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Item from "./components/Item"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '='],
      symbols: ['C', '/', '*', '-', '+'],
      display: '',
      result: ''
    }
  }

  returnProps = (prop) => {
    if (prop == 'C') {
      this.setState({
        display: this.state.display.slice(0, -1),
        result: ''
      })
    }
    else if (prop == "=") {
      let makeResult = ''
      try {
        makeResult = eval(this.state.display)
      } catch {
        makeResult = "Error"
      }
      this.setState({
        result: makeResult
      })
    }
    else {
      this.setState({
        display: this.state.display + prop
      })
    }
  }

  render() {

    let displayNumbers = this.state.numbers.map((elem, i) => {
      return <Item value={elem} key={i} flexB={'33.3%'} klikniecie={this.returnProps}></Item>
    })

    let displaySymbols = this.state.symbols.map((elem, i) => {
      return <Item value={elem} key={i} flexB={'20%'} klikniecie={this.returnProps}></Item>
    })



    return (
      <View style={[styles.container, { flex: 1, flexDirection: 'column' }]}>
        <StatusBar hidden={true}></StatusBar>
        <View style={{ flex: 1, backgroundColor: 'rgb(71, 255, 204)', alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={styles.text}>{this.state.display}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'rgb(71, 255, 204)', alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={styles.text2}>{this.state.result}</Text>
        </View>
        <View style={{ flex: 4, flexDirection: 'row' }}>
          <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'rgb(67, 67, 67)', justifyContent: 'space-between' }}>
            {displayNumbers}
          </View>
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'rgb(99, 99, 99)' }}>
            {displaySymbols}
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  text: { fontSize: 70, paddingRight: 20 },
  text2: { fontSize: 50, paddingRight: 20 }

});