import React, { Component } from 'react';
import axios from 'axios';
const PNF = require('libphonenumbers').PhoneNumberFormat;
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBankAccountNumber = this.onChangeBankAccountNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        first_name: '',
        last_name: '',
        date_of_birth:'',
        phone_number: '',
        email: '',
        bank_account_number:'',
        emailError:'',
        phoneError:'',
        isSubmit:true,
        submitError:''
    }
  }


  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })  
  }
  onChangeDateOfBirth(e) {
    this.setState({
      date_of_birth: e.target.value
    })
  }

  onChangePhoneNumber(e) {
    this.setState({ phone_number: e.target.value })
  }
  onChangeEmail(e) {

    console.log(e.target.value);
    let reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (reg.test(e.target.value) === false) {
      console.log("Email is Not Correct");
      this.setState({ emailError: "Email is Not Correct" })
      this.setState({ email: e.target.value })
      return false;
    }
    else {
      this.setState({ email: e.target.value })
      this.setState({ emailError: "" })
      console.log("Email is Correct");
    }
      
  }


  onChangeBankAccountNumber(e) {
    this.setState({
      bank_account_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if (phoneUtil.isValidNumberForRegion(phoneUtil.parse(this.state.phone_number, 'IR'), 'IR')) {
        console.log("Mobile is Not Correct");
        this.setState({ submitError: "Mobile is Not Correct" })
        return false;
      }
      else {
        this.setState({ submitError: "" })
        console.log("Mobile is Correct");
      }
    if(true){
    const obj = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        date_of_birth: this.state.date_of_birth,
        phone_number: this.state.phone_number,
        email: this.state.email,
        bank_account_number: this.state.bank_account_number
    };
    axios.post('http://localhost:4000/person/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
        first_name: '',
        last_name: '',
        date_of_birth:'',
        phone_number: '',
        email: '',
        bank_account_number:''
    })
}else{
    this.setState({ submitError: "Please check errors!" })
}
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Person</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Date of birth: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.date_of_birth}
                      onChange={this.onChangeDateOfBirth}
                      />
                </div>
                <div className="form-group">
                    <label>Phone number:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.phone_number}
                      onChange={this.onChangePhoneNumber}
                      />
                      <span style={{ color: "red" }}>{this.state.phoneError}</span>
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={(e) => this.onChangeEmail(e)}
                      />
                    <span style={{ color: "red" }}>{this.state.emailError}</span>

                       
                </div>
                <div className="form-group">
                    <label>Bank account number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.bank_account_number}
                      onChange={this.onChangeBankAccountNumber}
                      />
                </div>
                <div align="center" className="form-group">
                <span style={{ color: "red" }}>{this.state.submitError}</span>
                    <input type="submit" 
                    style={{ marginTop: 10 }}
                      value="Submit" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}