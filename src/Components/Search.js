import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTmpValue: ""
    }
  }
  
  isInputChange = (event) => {
    this.setState({
      inputTmpValue: event.target.value
    });
    this.props.btnClick(this.state.inputTmpValue)
  }
    render() {
        return (
            <div className="searchForm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <div className="btn-group">
                  <label/>
                  <input onChange={(event) => this.isInputChange(event)}  type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên" />
                  <button onClick={()=>{this.props.btnClick(this.state.inputTmpValue)}} type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Search;