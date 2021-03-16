import React, { Component } from 'react'; 
class OpenFormButton extends Component {
    switchButton = () => {
        if(!this.props.buttonState){
            return <button className="btn btn-block btn-outline-info" onClick={this.props.buttonClick}>Thêm</button>
        }
        else{
            return <button className="btn-block btn btn-outline-secondary mb-2" onClick={this.props.buttonClick}>Đóng</button>
        }
    }
    render() { 
        return (
            <div>
                {this.switchButton()} 
            </div>
); } } export default OpenFormButton;