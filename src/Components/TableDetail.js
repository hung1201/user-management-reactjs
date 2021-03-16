import React, { Component } from 'react';

class TableDetail extends Component {

    
  
    checkRole = () => {
        switch (this.props.role){
            case 1:
                return "Admin"
            case 2:
                return "Mod"
            case 3:
                return "Member"
            default:
                return "Unset"

        }
    }

    // GỌi thêm 1 props truyền dữ liệu
    editBtnOnClick = () => {
      this.props.editUser()
      this.props.changeStatusEditForm()
      // Props truyền state 
      // this.props.changeStatusEditForm()
      // Props truyền dữ liệu 
      // this.props.passDataToEditForm()
    }
    deleteBtnClick = (idUser) => {
      this.props.deleteBtnClick(idUser)
    }
    render() {
        return (
            <tr>
                  <td>{this.props.id }</td>
                  <td>{this.props.name}</td>
                  <td>{this.props.tel}</td>
                  <td>
                    {
                     this.checkRole()
                    }
                  </td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning edit"
                        onClick = { () => this.editBtnOnClick()}
                      >
                        <i className="fa fa-edit" /> Sửa
                      </div>
                      <div className="btn btn-danger delete"
                        onClick = { (idUser) => this.deleteBtnClick(this.props.id)}
                      >
                        <i className="fa fa-remove" /> Xóa
                      </div>
                    </div>
                  </td>
                </tr>
        );
    }
}

export default TableDetail;