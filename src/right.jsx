import React,{Component,Fragment} from 'react'

function Left(){
  return(
    <Fragment>
<div style = {{width:"45%",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",float:"right"}}>
          {this.props.commentList.map((item,index)=>{
            return (<div 
              key = {this.props.index} 
              style = {{fontSize:"14px",margin:"10px 15px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",}}>
              <p style={{backgroundColor:"yellow"}}>{this.props.item.split("&")[0]}</p>
              <p style={{fontSize:"16px",color:"blue"}}>{this.props.item.split("&")[1]}</p>
              <p style={{backgroundColor:"#eee"}}>{this.props.item.split("&").splice(2,this.props.item.length)}</p>
              <img 
                src = "../src/minus.png" 
                onClick = {this.props.delComment.bind(this,index)} 
                style = {{width:"20px",height:"20px"}}
              />
        </div>
              )
          })}
        </div>
    </Fragment>
  )
}

export default Left;