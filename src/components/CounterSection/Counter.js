import React, { useState,useEffect, Component } from 'react';
import axios from 'axios';
import strings from '../../translations';
const data = [
    {
        count: "10",
        countHeading: "M",
        title:  "Users"
    },
    {
        count: "23",
        countHeading: "K",
        title:  "Download"
    },
    {
        count: "9",
        countHeading: "M",
        title:  "Customer"
    },
    {
        count: "12",
        countHeading: "K",
        title:  "Developer"
    }
]
const Counter = props =>{

    const [s, setStatic] = useState({})

    useEffect(()=>{
        let lang = localStorage.getItem('locale')
        // this.setState({ locale: lang });
        axios.get(process.env.REACT_APP_API + '/metrics/homepage',{
            headers: {
                "Accept-Language": 'en'
            }
        })
        .then((response) => {
            setStatic(response.data)
        })
        .catch(err=>
            console.log(err))
    },[])
    return (
        <section className="section counter-area ptb_50">
            <div className="container">
                <div className="row justify-content-center">
                    
                        
                            <div key={`c_1`} className="col-5 col-sm-3 single-counter text-center">
                                <div className="counter-inner p-3 p-md-0">
                                {/* Counter Item */}
                                <div className="counter-item d-inline-block mb-3">
                                    <span className="fw-7">{s.totalCustomersCount}</span>
                                    {/* <span className="fw-7">{item.countHeading}</span> */}
                                </div>
                                    <h5>{strings.static1}</h5>
                                </div>
                            </div>
                            <div key={`c_2`} className="col-5 col-sm-3 single-counter text-center">
                                <div className="counter-inner p-3 p-md-0">
                                {/* Counter Item */}
                                <div className="counter-item d-inline-block mb-3">
                                    <span className="fw-7">{s.totalGeneratedInvoices}</span>
                                    {/* <span className="fw-7">{item.countHeading}</span> */}
                                </div>
                                    <h5>{strings.static2}</h5>
                                </div>
                            </div>
                            <div key={`c_3`} className="col-5 col-sm-3 single-counter text-center">
                                <div className="counter-inner p-3 p-md-0">
                                {/* Counter Item */}
                                <div className="counter-item d-inline-block mb-3">
                                    <span className="fw-7">{s.uniqueUsersCount}</span>
                                    {/* <span className="fw-7">{item.countHeading}</span> */}
                                </div>
                                    <h5>{strings.static3}</h5>
                                </div>
                            </div>
                        
                    
                </div>
            </div>
        </section>
    );
}
// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             static: {}
//         }

//     }
//     componentDidMount() {
//         let lang = localStorage.getItem('locale')
//         this.setState({ locale: lang });
//         axios.get(process.env.REACT_APP_API + '/metrics/homepage',{
//             headers: {
//                 "Accept-Language": 'en'
//             }
//         })
//         .then((response) => {
            
//             this.setState({static:response.data})
//         })
//     }
//     componentDidUpdate (pP,pS,sS) {
//         let lang = localStorage.getItem('locale')
//             if(pS.locale !== lang ){
//                 this.setState({ locale: lang });
//             }
//             if(pP.static === {}){
//                 this.setState({ static:pS.static})
//             }
//         }

//     render() {
       
//         return (
//             <section className="section counter-area ptb_50">
//                 <div className="container">
//                     <div className="row justify-content-center">
                        
                            
//                                 <div key={`c_1`} className="col-5 col-sm-3 single-counter text-center">
//                                     <div className="counter-inner p-3 p-md-0">
//                                     {/* Counter Item */}
//                                     <div className="counter-item d-inline-block mb-3">
//                                         <span className="counter fw-7">{this.state.static.totalCustomersCount}</span>
//                                         {/* <span className="fw-7">{item.countHeading}</span> */}
//                                     </div>
//                                         <h5>{strings.static1}</h5>
//                                     </div>
//                                 </div>
//                                 <div key={`c_2`} className="col-5 col-sm-3 single-counter text-center">
//                                     <div className="counter-inner p-3 p-md-0">
//                                     {/* Counter Item */}
//                                     <div className="counter-item d-inline-block mb-3">
//                                         <span className="counter fw-7">{this.state.static.totalGeneratedInvoices}</span>
//                                         {/* <span className="fw-7">{item.countHeading}</span> */}
//                                     </div>
//                                         <h5>{strings.static2}</h5>
//                                     </div>
//                                 </div>
//                                 <div key={`c_3`} className="col-5 col-sm-3 single-counter text-center">
//                                     <div className="counter-inner p-3 p-md-0">
//                                     {/* Counter Item */}
//                                     <div className="counter-item d-inline-block mb-3">
//                                         <span className="counter fw-7">{this.state.static.uniqueUsersCount}</span>
//                                         {/* <span className="fw-7">{item.countHeading}</span> */}
//                                     </div>
//                                         <h5>{strings.static3}</h5>
//                                     </div>
//                                 </div>
                            
                        
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

export default Counter;