import React from 'react'
export class AddTodo extends React.Component{
    state={
        desc:'',
        expense:''
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.desc,this.state.expense);
        this.setState({
             desc:'',
             expense:''
            })
    }
    onChange=(e)=>this.setState({[e.target.name]:e.target.value})
render(){
    return(
    <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
  </div>
  <input name='desc' value={this.state.desc} onChange={this.onChange} placeholder='Description' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
    <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Expense</span>
  </div>
  <input  type='number' min='0' name='expense' value={this.state.expense} onChange={this.onChange} placeholder='expense'className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
        <button type='submit' className='btn btn-primary' value='Submit'>Add</button>
    </form>
        )
    }
}