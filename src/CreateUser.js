import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import strings from './translations';
let API = process.env.REACT_APP_API;

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.onLoad();
    }

    render() {
        let { plans } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 order-md-1" style={{justifyContent: strings.direction , textAlign: strings.direction }}>
                        <h4 className="mb-3">{strings.userInfo}</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row" style={{justifyContent: strings.direction , textAlign: strings.direction }}>
                                <div className="col-md-12 mb-3">
                                <label htmlFor="name">{strings.name}</label>
                                <input value={this.props.user.name} onChange={this.props.changeUserField} type="text" className="form-control" name="name"  required />
                                <div style={{color:'red'}}>{this.props.validator.message('name', this.props.user.name, 'required')}</div>                                
                            </div>
                            </div>
                            <div className="row" style={{justifyContent: strings.direction , textAlign: strings.direction }}>
                                <div className="col-md-6 mb-3">
                                <label htmlFor="email">{strings.email}</label>
                                <input value={this.props.user.email} onChange={this.props.changeUserField} type="text" className="form-control" name="email" required />
                                <div style={{color:'red'}}>{this.props.validator.message('email', this.props.user.email, 'required|email')}</div>

                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">{strings.phone}</label>
                                    <input value={this.props.user.phone} onChange={this.props.changeUserField} type="text" className="form-control" name="phone" required />
                                    <div style={{color:'red'}}>{this.props.validator.message('phone', this.props.user.phone, 'required|phone')}</div>
                                                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUser;

