import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
        bank_account_number:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/person/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                first_name: response.data.first_name, 
                last_name: response.data.last_name,
                date_of_birth: response.data.date_of_birth,
                phone_number: response.data.phone_number, 
                email: response.data.email,
                bank_account_number: response.data.bank_account_number });
          })
          .catch(function (error) {
              console.log(error);
          })
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
        this.setState({
          phone_number: e.target.value
        });
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })  
      }
      onChangeBankAccountNumber(e) {
        this.setState({
          bank_account_number: e.target.value
        })
      }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        date_of_birth: this.state.date_of_birth,
        phone_number: this.state.phone_number,
        email: this.state.email,
        bank_account_number: this.state.bank_account_number
    };
    axios.post('http://localhost:4000/person/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Person</h3>
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
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Bank account number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.bank_account_number}
                      onChange={this.onChangeBankAccountNumber}
                      />
                </div>
                <div className="form-group">
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