import React,{Component} from 'react'//installs react methods etc.
import axios from 'axios'



export default class Main extends React.Component { //export default for all components
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/student')
      const studentData = res.data
      console.log(studentData)
    } catch (error) {
    }
  }

  render(){
    return (
    <div>
      <h1>hello</h1>
    </div>
    )
  }

}
