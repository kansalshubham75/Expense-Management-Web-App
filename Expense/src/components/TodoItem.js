import React from 'react'
export class TodoItem extends React.Component{
    getStyle(){
        return({
            backgroundColor: this.props.todo.completed?'#c3e6cb':'#f5c6cb',
            color:this.props.todo.completed?'#155724':'#721c24',
            // textAlign:'center',
            // padding:'5px'
            })
        }
        input(){
            return(this.props.todo.completed?<input style={{float:'right'}} checked type='checkbox' onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>:<input style={{float:'right'}}  type='checkbox' onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>)
        }
     render(){
   return(
    <div  >
        <li className='list-group-item' style={this.getStyle()}>
        <span style={{float:'left'}}>
        <strong>Description:</strong>
        {this.props.todo.desc}</span>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <span  style={{textAlign:'center'}}>
        <strong>Expense:</strong>
        {this.props.todo.expense}</span>
        {this.input()}
        </li>
    </div>
    )
}
}
