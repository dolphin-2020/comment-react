import React,{Component,Fragment} from 'react'

function Left(){
  return(
    <Fragment>
<div style={{width:"45%",float:"left"}}>
        <input 
          type="text" 
          style={{width:"60%",height:"30px"}} 
          placeholder="Please enter your name" onChange={this.props.valChange} value={this.props.register}/>
          
        <button onClick={this.props.addToList} 
          type="submit" 
          style={{width:"15%",height:"36px"}}>Register</button>
        <select onChange={this.props.selectVal} style={{width:"22%",height:"36px"}}>
        { 
          this.props.nameList.map((item,index)=>{
            return <option 
              key={this.props.index} 
              value={this.props.item}>{this.props.item}
            </option>
          })
        }
        </select>
        <br/>
        <p style={{marginTop:"30px",color:"#aaa",fontSize:"16px"}}>
        {
          this.props.defaultPerson
        } will give comment
        </p>
        <textarea 
          value={this.props.commentText}  
          cols = "60" rows="6" 
          onChange = {this.props.commentChange}>
          {this.props.commentText}
          </textarea>
        <br/>
        <button 
          onClick = {this.props.addComment}
          style={{width:"100px",height:"36px"}} 
          type="button" placeholder="Please input comment">
          Submit
          </button>
        </div>
    </Fragment>
  )
}

export default Left;