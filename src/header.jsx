import React,{Component,Fragment} from 'react'

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultPerson:'anonymous',
      register:'',
      nameList:[],
      commentText:'',
      commentList:[],
    }
      this.valChange=this.valChange.bind(this);
      this.addToList=this.addToList.bind(this);
      this.selectVal=this.selectVal.bind(this);
      this.commentChange=this.commentChange.bind(this);
      this.addComment=this.addComment.bind(this);
  }

  render(){
    return (
      <Fragment>
      <div style={{width:"45%",float:"left"}}>
        <input 
          type="text" 
          style={{width:"60%",height:"30px"}} 
          placeholder="Please enter your name" onChange={this.valChange} value={this.state.register}/>
          
        <button onClick={this.addToList} 
          type="submit" 
          style={{width:"15%",height:"36px"}}>Register</button>
        <select onChange={this.selectVal} style={{width:"22%",height:"36px"}}>
        { 
          this.state.nameList.map((item,index)=>{
            return <option 
              key={index} 
              value={item}>{item}
            </option>
          })
        }
        </select>
        <br/>
        <p style={{marginTop:"30px",color:"#aaa",fontSize:"16px"}}>
        {
          this.state.defaultPerson
        } will give comment
        </p>
        <textarea 
          value={this.state.commentText}  
          cols = "60" rows="6" 
          onChange = {this.commentChange}>
          {this.state.commentText}
          </textarea>
        <br/>
        <button 
          onClick = {this.addComment}
          style={{width:"100px",height:"36px"}} 
          type="button" placeholder="Please input comment">
          Submit
          </button>
        </div>
        <div style = {{width:"45%",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",float:"right"}}>
          {this.state.commentList.map((item,index)=>{
            return (<div 
              key = {index} 
              style = {{fontSize:"14px",margin:"10px 15px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",}}>
              <p style={{backgroundColor:"yellow"}}>{item.split("&")[0]}</p>
              <p style={{fontSize:"16px",color:"blue"}}>{item.split("&")[1]}</p>
              <p style={{backgroundColor:"#eee"}}>{item.split("&").splice(2,item.length)}</p>
              <img 
                src = "../src/minus.png" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"20px",height:"20px"}}
              />
        </div>
              )
          })}
        </div>
      </Fragment>
    )
  }

  valChange(e){
    this.setState(
      {
        defaultPerson:e.target.value,
        register:e.target.value,
      }
    )
  }

  addToList(){
    if(this.state.register===''){
      alert("Are you kidding me?")
    }
    
    if(this.state.register!=''){
      this.setState(
        {
          nameList:[this.state.register,...this.state.nameList],
          register:''
        }
      )
    }
  }
  
  selectVal(e){
    this.setState(
      {
        defaultPerson:e.target.value
      }
    )
  }
    
  commentChange(e){
    this.setState({
      commentText:e.target.value
    })
  }

  addComment(){
    if(this.state.commentText===''){
      alert("Are you kidding me")
    }
    if(this.state.commentText!=''){
      this.setState({
      commentList:[(new Date().toLocaleDateString())+"  "+(new Date().toLocaleTimeString())+"    &"+ this.state.defaultPerson+" said：&" +this.state.commentText,...this.state.commentList],
      commentText:''
    })
    }
  }

  delComment(index){
    let x=[...this.state.commentList];
    x.splice(index,1)
    this.setState({
      commentList:x
    })
  }

}