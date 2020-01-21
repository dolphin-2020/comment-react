import React,{ Component,Fragment } from 'react'
import styles from './styles.js'

export default class TodoList extends Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <Fragment>
        <select style={styles.select}>
        {
          this.state.nameList.map((item,index)=>{
            <option key={new Date().getTime+index} value={item}>{item}</option>
          })
        }
        </select>
      <Fragment/>
    )
  }
}