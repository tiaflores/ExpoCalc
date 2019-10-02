import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Row from "./components/Row";
import Button from "./components/Button";

export default class App extends React.Component {
  constructor(){
        super();

        this.state = {
            result: "",
            history: "",
            histArr: [],
        }
    }

    handleTap = (value) => {
            if(value === "="){
            this.calculate()
        } else if(value === "CE"){
            this.reset()
        }else {
            this.setState({
                result: this.state.result + "" + value
            })
        }

    }
     calculate(){
      try {
          let res = this.state.result
          let histArray = this.state.histArr
          let history = res + " = " + eval(res)

          this.setState({result: eval(res)})
          histArray.push(history)

        } catch (e) {
            this.setState({
                result: "error"
            })
        }
     }
      reset() {
        this.setState({
            result: "",
            history: "",
            histArr: []
        })
    }
    hist(){
        return this.state.histArr.map(historyArr => (
          <ul>
          <li>{historyArr}</li>
          </ul>
        ))
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.history}>{this.state.histArr + '\n\n'}</Text>
          <Text style={styles.value}>
            {(this.state.result).toLocaleString()}
          </Text>
          
          <Row>
            <Button text="7" onPress={() => this.handleTap(7)} />
            <Button text="8" onPress={() => this.handleTap(8)} />
            <Button text="9" onPress={() => this.handleTap(9)} />
            <Button text="/" theme="accent" onPress={() => this.handleTap("/")}/>
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap(4)} />
            <Button text="5" onPress={() => this.handleTap(5)} />
            <Button text="6" onPress={() => this.handleTap(6)} />
            <Button text="x" theme="accent" onPress={() => this.handleTap( "*")}/>
            
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap(1)} />
            <Button text="2" onPress={() => this.handleTap(2)} />
            <Button text="3" onPress={() => this.handleTap(3)} />
            
            <Button text="-" theme="accent" onPress={() => this.handleTap( "-")}/>
          </Row>

          <Row>
            <Button text="0" onPress={() => this.handleTap(0)}/>
            <Button text="C" theme="secondary" onPress={() => this.handleTap("CE")}/>
            <Button text="=" theme="accent" onPress={() => this.handleTap("=")}/>
            <Button text="+" theme="accent" onPress={() => this.handleTap("+")}/>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    justifyContent: "flex-end"
  },
  value: {
    color: "#00000",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  history: {
   fontSize: '20',
   textAlign: "right",
   color: "#969696",
   marginRight: 20,
  }
});