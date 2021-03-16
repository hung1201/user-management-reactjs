import React, { Component } from 'react';
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: "",
                name: "",
                tel: "",
                role: ""
        }
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.userEditObject !== this.props.userEditObject){
    //         this.setState({
    //             id: this.props.userEditObject.id,
    //             name: this.props.userEditObject.name,
    //             tel: this.props.userEditObject.tel,
    //             role: this.props.userEditObject.role
    //         });
    //     }
    //     else{
    //         this.setState({
    //             id: this.props.userEditObject.id,
    //             name: this.props.userEditObject.name,
    //             tel: this.props.userEditObject.tel,
    //             role: this.props.userEditObject.role
    //         });
    //     }
    // }
     static getDerivedStateFromProps(nextProps,prevState) {

        return null
      }
      componentDidUpdate(prevProps,prevState) {
          if(prevProps.userEditObject!== this.props.userEditObject){
              this.setState({
                id: this.props.userEditObject.id,
                name: this.props.userEditObject.name,
                tel: this.props.userEditObject.tel,
                role: this.props.userEditObject.role
              })
          }
      } 
    
    isChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState(
            {
                [name]:value
            }
            )
            
    }
    saveBtn = ()=> {
        var info = {}
        info.id=this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.role=this.state.role
        this.props.changeStatusEditForm() // Change status
        this.props.getUserEditInfo(info)
    }
     isShowEditForm = () => {
        if(this.props.editUserStatus) {
            return (
<div>
<div className="card border-primary mb-3">
<div className="card-header">Sửa thông tin User</div>
<div className="card-body text-primary">

<div className="form-group">
<input  
onChange={(event)=>this.isChange(event)}
defaultValue={this.props.userEditObject.name}
name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Username" /></div>
<div className="form-group">
<input  
onChange={(event)=>this.isChange(event)}
defaultValue={this.props.userEditObject.tel}
name="tel" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" /></div>
<div className="form-group">
<select 
onChange={(event)=>this.isChange(event)}
defaultValue={this.props.userEditObject.role}
name="role" className="custom-select" >
<option value={1}>Admin</option>
<option value={2}>Mod</option>
<option value={3}>Member</option>
</select>
</div>
<div className="form-group">
<input onClick = { () => this.saveBtn()} type="submit" value="Edit" className="btn btn-block btn-warning"/>
</div>
</div>
</div>
</div>   )} }
    render() {
        return (
            <div>
                {this.isShowEditForm()}
            </div>
        );
    }
}

export default EditUser;


    