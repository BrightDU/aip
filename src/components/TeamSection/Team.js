import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations'
const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneTeamSection";
let API = process.env.REACT_APP_API;
const logos  = ['https://cdn-icons-png.flaticon.com/512/882/882701.png', 'https://res.cloudinary.com/apideck/image/upload/v1562804220/catalog/oracle-marketing-cloud/icon128x128.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwcBLvNzyg2izRjy1Yd8Y2fnZ1kT50sJ2W9m8o3i537SYB2qy8TqI4EQTrDFiQwXr0-Q&usqp=CAU', 'http://www.staffingrus.net/images/oracle-dabase-img.jpg', 'https://pbs.twimg.com/profile_images/1172400575725441025/JtZUwd4M_400x400.jpg','https://miro.medium.com/max/474/1*WdPbozgRoImv9U5BV8Fl2Q.jpeg', 'https://dropship-empire.com/wp-content/uploads/2021/02/shopify-1.jpg' ]
class Team extends Component {
    state = {
        data: {},
        teamData: [],
        teamIcons: [],
        companiesLogos: [],
        sliderArray: [],
    }
    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    teamData: res.data.teamData,
                    teamIcons: res.data.teamIcons
                })
                // console.log(this.state.data)
            })
            .catch(err => console.log(err))

        axios.get(API + "/download/vendors/logos", {
            headers: {
                "Accept-Language": 'en'
            }
        }).then(({ data }) => {

            // setLoading(false)
            // setCompanies(data);
            this.setState({ loading: false, companiesLogos: data })
        }).catch(() => {
            this.setState({ loading: false, companies: [] })
            // setCompanies([]);
            // setLoading(false)
        });
    }
    componentDidUpdate(prevProps, prevState) {

        let array2 = []
        let i = Math.ceil(this.state.companiesLogos.length / 4)
        if (this.state.companiesLogos.length > 0 && this.state.sliderArray.length < i) {
            for (let j = 0; j < i; j++) {

                let array = this.state.companiesLogos.slice((j * 4), (j * 4) + 4);
                array2.push(array)
            }
            this.setState({ sliderArray: array2 })
        }
    }
    render() {

        const { companiesLogos, sliderArray } = this.state
        return (
            <section className="section team-area team-style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-12">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                {/* <h2 className="text-capitalize">{strings.clients}</h2> */}
                                <h3 className="text-capitalize"  >{strings.intergrationDescription}</h3>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="ser" style={{maxWidth: '800px', margin: 'auto'}}>
                        {logos.map((item, idx) => {
                            return (
                                <div key={`t_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    {/* Single Team */}
                                    <div className="single-team text-center radius-100 overflow-hidden m-2 m-lg-0">
                                        {/* Team Thumb */}
                                        <div className="team-thumb radius-100 d-inline-block position-relative overflow-hidden">
                                            <img src={item} alt="" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <hr className="divider"/>
                    <div className="row ptb_50">
                        <h3 className="integrationHeader">{strings.integrationHead}</h3>
                        <img  className="integration" src='img/newintegration.jpeg' style={{ width: '100%'}}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;