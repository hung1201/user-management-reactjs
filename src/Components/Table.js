import React, { Component } from 'react';
import TableDetail from './TableDetail.js'

class Table extends Component {  
  deleteBtnClick = (idUser) => {
    this.props.deleteBtnClick(idUser)
  }
    render() {
        return (
          <div className="col-9">
            <table className="table table-striped table-hover text-center">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.props.dataUserProps.map((value,key) => {
                      return (
                        <TableDetail 
                        editUser = { (user) => this.props.editUser(value) }
                        changeStatusEditForm = {() => this.props.changeStatusEditForm()} 
                        deleteBtnClick = {(idUser)=> this.deleteBtnClick(idUser)}
                        key={key} 
                        id = {value.id}
                        name = {value.name}
                        tel = {value.tel}
                        role = {value.role}
                      />
                      )        
                    })
                  }
              </tbody>
            </table>
          </div>
        );
    }
}

export default Table;