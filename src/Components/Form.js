import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            role:""
        }
    }
    
    isInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
           this.setState(
            { 
            [name] : value 
            }    
        ); 
    }
    isFormOpen = () => {
        if(this.props.formState) {
            return (
<div>
<div className="card border-primary mb-3">
<div className="card-header">Thêm User</div>
<div className="card-body text-primary">
<form>
<div className="form-group">
<input onChange={(event) => this.isInputChange(event)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Username" />
</div>
<div className="form-group">
<input onChange={(event) => this.isInputChange(event)} name="tel" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
</div>
<div className="form-group">
<select name="role" onChange={(event) => this.isInputChange(event)} className="custom-select" required>
<option hidden >Chọn quyền</option>
<option value={1}>Admin</option>
<option value={2}>Mod</option>
<option value={3}>Member</option>
</select>
</div>
<div className="form-group">
<input onClick={ () => this.props.addUserBtn(this.state.name,this.state.tel,this.state.role)} type="reset" value="Add" className="btn btn-block btn-primary"/>
</div>
</form>
</div>
</div>
</div>   
            )
        }
    }
    render() {
        return ( 
            <div>
                { this.isFormOpen() }
            </div> 
        );
    }
}

export default Form;