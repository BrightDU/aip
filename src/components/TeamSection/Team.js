import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneTeamSection";
let API = process.env.REACT_APP_API;

const logos = [
    'https://cdn-icons-png.flaticon.com/512/882/882701.png',
    'https://res.cloudinary.com/apideck/image/upload/v1562804220/catalog/oracle-marketing-cloud/icon128x128.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwcBLvNzyg2izRjy1Yd8Y2fnZ1kT50sJ2W9m8o3i537SYB2qy8TqI4EQTrDFiQwXr0-Q&usqp=CAU',
    'http://www.staffingrus.net/images/oracle-dabase-img.jpg',
    'https://pbs.twimg.com/profile_images/1172400575725441025/JtZUwd4M_400x400.jpg',
    'https://miro.medium.com/max/474/1*WdPbozgRoImv9U5BV8Fl2Q.jpeg',
    'https://dropship-empire.com/wp-content/uploads/2021/02/shopify-1.jpg',
];

class Team extends Component {
    state = {
        data: {},
        teamData: [],
        teamIcons: [],
        companiesLogos: [],
    };

    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    teamData: res.data.teamData,
                    teamIcons: res.data.teamIcons,
                });
            })
            .catch(err => console.log(err));

        axios.get(API + "/download/vendors/logos", {
            headers: { "Accept-Language": 'en' },
        }).then(({ data }) => {
            this.setState({ companiesLogos: data });
        }).catch(() => {
            this.setState({ companiesLogos: [] });
        });
    }

    render() {
        return (
            <section className="section team-area team-style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-12">
                            <div className="section-heading text-center">
                                <h1 
                                    className="text-capitalize" 
                                    style={{ fontSize: '32px', color: '#00998A' }}
                                >
                                    {strings.integrationHeading}
                                </h1> 
                                <h2 
                                    className="text-capitalize" 
                                    style={{ fontSize: '24px', color: '#00998A' }}
                                >
                                    {strings.integrationSubheading}
                                </h2>
                                <h3 
                                    className="text-capitalize" 
                                    style={{ fontSize: '20px', fontWeight: 'lighter', color: '#00998A' }}
                                >
                                    {strings.intergrationDescription}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Logo Section */}
                    <div 
                        className="logo-container" 
                        style={{
                            overflowX: 'auto', 
                            display: 'flex', 
                            gap: '20px', 
                            padding: '10px', 
                            maxWidth: '800px', 
                            margin: 'auto', 
                            scrollbarWidth: 'thin'
                        }}
                    >
                        {logos.map((item, idx) => (
                            <div 
                                key={idx} 
                                style={{ minWidth: '150px', textAlign: 'center' }}
                            >
                                <img
                                    src={item}
                                    alt={`Logo ${idx + 1}`}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'contain',
                                        borderRadius: '50%',
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Integration Section */}
                    <hr className="divider" />
                    <div className="row ptb_50">
                        <div className="col-12 text-center">
                            <h3 
                                className="integrationHeader" 
                                style={{ color: '#00998A' }}
                            >
                                {strings.integrationHead}
                            </h3>
                        </div>
                        <div className="col-12">
                            <img 
                                className="integration" 
                                src='img/newintegration.jpeg' 
                                style={{ width: '100%' }} 
                                alt="Integration" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;

