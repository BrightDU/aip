import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import strings from './translations';
let API = process.env.REACT_APP_API;

class CreateVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sellerName: '',
            vatNumber: '',
            groupVatNumber: '',
            address: {
                translations:[{
                    street:'',
                    additionalStreet:'',
                    buildingNumber:'',
                    additionalNumber:'',
                    city:'',
                    postalCode:'',
                    state:'',
                    neighborhood:'',
                    countryCode:'KSA',
                    locale:'1'
                }]
            },
            identities: [],
        }
        // this.onLoad();
    }

    submitForm = () => {
        this.setState({ error: null })
        axios.post(`${API}/feedback`, { ...this.state }, {
            headers: {
                "accept-language": "ar"
            }
        }).then((m) => {
            this.setState({
                name: '',
                email: '',
                phone: '',
                description: ''
            })
            this.setState({ success: true })
        }).catch((e) => {
            if (e.response) {
                let { data, status } = e.response;
                if (status == 400) {
                    let list = [];
                    Object.keys(data.errors).map(key => {
                        list.push(data.errors[key][0]);
                    })
                    this.setState({ error: list });
                } else {
                    this.setState({ error: "حدث خطأ تقني!" })
                }
            }
            else {
                this.setState({ error: "حدث خطأ تقني!" })
            }
        })
    }

    render() {
        let { plans } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h4 className="mb-3">{strings.vendorInfo}</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email">{strings.email}</label>
                                    <input type="text" className="form-control" id="email" placeholder defaultValue required />
                                    <div className="invalid-feedback">{strings.emailRequired}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name">{strings.name}</label>
                                    <input type="text" className="form-control" id="name" placeholder defaultValue required />
                                    <div className="invalid-feedback">{strings.nameRequired}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">{strings.phone}</label>
                                    <input type="text" className="form-control" id="phone" placeholder defaultValue required />
                                    <div className="invalid-feedback">{strings.phoneRequired}</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVendor;

