import React, { Component } from 'react'
import './App.css';
import OpenFormButton from './Components/OpenFormButton.js';
import Header from './Components/Header.js'
import Search from './Components/Search';
import Table from './Components/Table';
import Form from './Components/Form';
import data from './data.json'
import EditUser from './Components/EditUser';
var LOCAL_STORAGE_KEY = 'userDataKEY'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isEdit: false,
      dataUser : [],
      searchText: "",
      userEditObject:{},     
    }
    this.editUser = this.editUser.bind(this)
    this.getUserEditInfo = this.getUserEditInfo.bind(this)
  }
  
  componentWillMount() {
    if(localStorage.getItem(LOCAL_STORAGE_KEY ) === null){
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data))
    }
    else {
      var tmp = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      this.setState({
        dataUser: tmp
      });
    }
  }
  

  buttonClick = () => {
    this.setState( { isFormOpen: !this.state.isFormOpen } )
  }
  searchBtnClick = (inputValue) => {
    this.setState({
      searchText: inputValue
    });

  }

  getNewUserData = (newName,newTel,newRole) => {
    var newValue = {}
    newValue.id= this.state.dataUser.length + 1
    newValue.name=newName
    newValue.tel=newTel
    newValue.role=Number(newRole)
    var dataUserState = this.state.dataUser
    if(newValue.name!==""&&newValue.tel!==""){
       dataUserState.push(newValue)
    this.setState(
      {
        dataUser: dataUserState,
        isFormOpen: false
      }
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataUserState));
    }
   
  }
  // Thay đổi state của Edit Form
  changeStatusEditForm = () => {
    this.setState({isEdit:!this.state.isEdit})
  }
  // Lấy dữ liệu từ TableDetail cho EditForm
  // passDataToEditForm = (userValue) => {
  //   this.setState({
  //     userEditValue : userValue
  //   });
  // }
  // Test Connect
  editUser = (user) => {
    this.setState({
      userEditObject : user
    });
  }
  // Chuyển dữ liệu EditForm cho state => tự động render ra TableDetail
  getUserEditInfo = (info) => {
    this.state.dataUser.forEach((value,key)=>{
      if(value.id===Number(info.id)){
        value.name = info.name
        value.tel = info.tel
        value.role = Number(info.role)
      }
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.dataUser))
  }
  deleteBtnClick = (idUser) => {
    const tmpData = this.state.dataUser.filter(value => value.id !== idUser)
    this.setState({ 
      dataUser : tmpData
    });
    // Đẩy dữ liệu vào LocalStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tmpData))
  }
  render() {
    var dataSearched = []
    this.state.dataUser.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        dataSearched.push(item)
      }
    })
    return ( 
        <div>
          <Header/>
          <Search btnClick={(inputValue) => this.searchBtnClick(inputValue)}/>
          <div className="container">
            <div className="row">
              <Table 
                dataUserProps = {dataSearched}
                changeStatusEditForm = {() => this.changeStatusEditForm()} 
                editUser = { (user) => this.editUser(user) }
                deleteBtnClick = {(idUser)=> this.deleteBtnClick(idUser)}
              />
              <div className="col-3">
                {/* Kết nối giữa 2 component */}
                <OpenFormButton buttonClick = { () => this.buttonClick()} buttonState={this.state.isFormOpen}/>
                <Form addUserBtn = { (newName,newTel,newRole) => this.getNewUserData(newName,newTel,newRole)} formState={this.state.isFormOpen}/>
                <EditUser 
                    editUserStatus ={this.state.isEdit} 
                    changeStatusEditForm = {() => this.changeStatusEditForm()}
                    userEditObject={this.state.userEditObject}
                    getUserEditInfo = {(info) =>  this.getUserEditInfo(info)}/>
              </div>
            </div>
          </div> 
        </div>
    );
  }
    
}

export default App;