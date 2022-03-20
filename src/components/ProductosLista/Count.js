import React, {Component} from 'react';
import './Count.css';
import { Button, Card, Icon} from 'semantic-ui-react'

class Count extends Component {
  constructor(props){
    super(props)

    this.state = {counter: 0 }
  }

  substract(){
    this.setState({ counter: this.state.counter - 1})
  }
  add(){
    this.setState({ counter: this.state.counter + 1})
  }
  render() {

    return(
        <div className="count">
          <Card>
              <Card.Content>
              <h3>Contador</h3>
              <h3> {this.state.counter} </h3>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button  onClick={this.substract.bind(this)}><h1> - </h1></Button>
                  <Button  onClick={this.add.bind(this)}> <h1> + </h1></Button>
                </div>
              </Card.Content>
          </Card>
        </div>
    );

  }
}

export default Count;