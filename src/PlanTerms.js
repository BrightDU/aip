


import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import strings from './translations';
let API = process.env.REACT_APP_API;

class PlanTerms extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.onLoad();
    }

    render() {
        let { plans } = this.state;
        return (
            <div class="" role="alert">
                <ul style={{ listStyle: "initial !important ", fontSize: '13px', textAlign: strings.direction }} className='ul'>
                    <li>{strings.termsLine0}</li>
                    <li>{strings.termsLine1}</li>
                    <li >{strings.termsLine2}</li>
                    <li >{strings.termsLine3}</li>
                    <li>{strings.termsLine4}</li>
                    {/* <li >
                        
                        {strings.optional}
                        <ul style={{ listStyle: "inside !important", fontSize: '13px'}} className='ol' >
                            <li >{strings.dataMigration}</li>
                            <li >{strings.invoiceCustomziation}</li>
                            <li >{strings.premiumSupport}</li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        );
    }
}

export default PlanTerms;

