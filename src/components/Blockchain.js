import React, { Component } from 'react'

export class Blockchain extends Component {
    constructor() {
        super();
        this.state = {
          users: {},
        };
      }
      componentDidMount() {
        fetch("https://blockchain.info/ticker").then((res) => {
          res.json().then((result) => {
            let { users } = this.state;
            console.log('=======================',result);
            users = result;
            this.setState({ users: users });
          });
        });
      }
    
      render() {
       
        return (
            <div><h1>hayat</h1>
          { console.log(this.state.users)} </div>
           
        );
      }
    }

export default Blockchain
