import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations'

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneWorkSection";

class Work extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    workData: res.data.workData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="section work-area bg-overlay overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-white">{strings.iframe}</h2>
                                {/* <p className="text-white my-3 mt-sm-4 mb-sm-5">{this.state.data.headingText}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Single Work */}
                        {/* Work Icon */}
                        {/* {this.state.workData.map((item, idx) => {
                            return(
                                <div key={`w_${idx}`} className="col-12 col-md-4">
                                <div className="single-work text-center p-3">
                                    <div className="work-icon">
                                        <img className="avatar-md" src={item.image} alt="" />
                                    </div>
                                    <h3 className="text-white py-3">{item.title}</h3>
                                    <p className="text-white">{item.content}</p>
                                </div>
                            </div>
                            );
                        })} */}
                        <iframe src='https://webchat.botframework.com/embed/einvcb-bot?s=S2hhycYUpnM.OuH8j9TPWHvj_OrAI5G3uI1lrdnCPGQuAbywZB50Vs4'  title='test' className='iframe2'></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;