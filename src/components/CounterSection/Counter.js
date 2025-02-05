// import React, { useState,useEffect, Component } from 'react';
// import axios from 'axios';
// import strings from '../../translations';
// const data = [
//     {
//         count: "10",
//         countHeading: "M",
//         title:  "Users"
//     },
//     {
//         count: "23",
//         countHeading: "K",
//         title:  "Download"
//     },
//     {
//         count: "9",
//         countHeading: "M",
//         title:  "Customer"
//     },
//     {
//         count: "12",
//         countHeading: "K",
//         title:  "Developer"
//     }
// ]
// const Counter = props =>{

//     const [s, setStatic] = useState({})

//     useEffect(()=>{
//         let lang = localStorage.getItem('locale')
//         // this.setState({ locale: lang });
//         axios.get(process.env.REACT_APP_API + '/metrics/homepage',{
//             headers: {
//                 "Accept-Language": 'en'
//             }
//         })
//         .then((response) => {
//             setStatic(response.data)
//         })
//         .catch(err=>
//             console.log(err))
//     },[])
//     return (
//         <section className="section counter-area ptb_50">
//             <div className="container">
//                 <div className="row justify-content-center">
                    
                        
//                             <div key={`c_1`} className="col-5 col-sm-3 single-counter text-center">
//                                 <div className="counter-inner p-3 p-md-0">
//                                 {/* Counter Item */}
//                                 <div className="counter-item d-inline-block mb-3">
//                                     <span className="fw-7">{s.totalCustomersCount}</span>
//                                     {/* <span className="fw-7">{item.countHeading}</span> */}
//                                 </div>
//                                     <h5>{strings.static1}</h5>
//                                 </div>
//                             </div>
//                             <div key={`c_2`} className="col-5 col-sm-3 single-counter text-center">
//                                 <div className="counter-inner p-3 p-md-0">
//                                 {/* Counter Item */}
//                                 <div className="counter-item d-inline-block mb-3">
//                                     <span className="fw-7">{s.totalGeneratedInvoices}</span>
//                                     {/* <span className="fw-7">{item.countHeading}</span> */}
//                                 </div>
//                                     <h5>{strings.static2}</h5>
//                                 </div>
//                             </div>
//                             <div key={`c_3`} className="col-5 col-sm-3 single-counter text-center">
//                                 <div className="counter-inner p-3 p-md-0">
//                                 {/* Counter Item */}
//                                 <div className="counter-item d-inline-block mb-3">
//                                     <span className="fw-7">{s.uniqueUsersCount}</span>
//                                     {/* <span className="fw-7">{item.countHeading}</span> */}
//                                 </div>
//                                     <h5>{strings.static3}</h5>
//                                 </div>
//                             </div>
                        
                    
//                 </div>
//             </div>
//         </section>
//     );
// }
// // class Counter extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state ={
// //             static: {}
// //         }

// //     }
// //     componentDidMount() {
// //         let lang = localStorage.getItem('locale')
// //         this.setState({ locale: lang });
// //         axios.get(process.env.REACT_APP_API + '/metrics/homepage',{
// //             headers: {
// //                 "Accept-Language": 'en'
// //             }
// //         })
// //         .then((response) => {
            
// //             this.setState({static:response.data})
// //         })
// //     }
// //     componentDidUpdate (pP,pS,sS) {
// //         let lang = localStorage.getItem('locale')
// //             if(pS.locale !== lang ){
// //                 this.setState({ locale: lang });
// //             }
// //             if(pP.static === {}){
// //                 this.setState({ static:pS.static})
// //             }
// //         }

// //     render() {
       
// //         return (
// //             <section className="section counter-area ptb_50">
// //                 <div className="container">
// //                     <div className="row justify-content-center">
                        
                            
// //                                 <div key={`c_1`} className="col-5 col-sm-3 single-counter text-center">
// //                                     <div className="counter-inner p-3 p-md-0">
// //                                     {/* Counter Item */}
// //                                     <div className="counter-item d-inline-block mb-3">
// //                                         <span className="counter fw-7">{this.state.static.totalCustomersCount}</span>
// //                                         {/* <span className="fw-7">{item.countHeading}</span> */}
// //                                     </div>
// //                                         <h5>{strings.static1}</h5>
// //                                     </div>
// //                                 </div>
// //                                 <div key={`c_2`} className="col-5 col-sm-3 single-counter text-center">
// //                                     <div className="counter-inner p-3 p-md-0">
// //                                     {/* Counter Item */}
// //                                     <div className="counter-item d-inline-block mb-3">
// //                                         <span className="counter fw-7">{this.state.static.totalGeneratedInvoices}</span>
// //                                         {/* <span className="fw-7">{item.countHeading}</span> */}
// //                                     </div>
// //                                         <h5>{strings.static2}</h5>
// //                                     </div>
// //                                 </div>
// //                                 <div key={`c_3`} className="col-5 col-sm-3 single-counter text-center">
// //                                     <div className="counter-inner p-3 p-md-0">
// //                                     {/* Counter Item */}
// //                                     <div className="counter-item d-inline-block mb-3">
// //                                         <span className="counter fw-7">{this.state.static.uniqueUsersCount}</span>
// //                                         {/* <span className="fw-7">{item.countHeading}</span> */}
// //                                     </div>
// //                                         <h5>{strings.static3}</h5>
// //                                     </div>
// //                                 </div>
                            
                        
// //                     </div>
// //                 </div>
// //             </section>
// //         );
// //     }
// // }

// export default Counter;

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import strings from '../../translations';

const Counter = () => {
  const [stats, setStats] = useState({
    totalCustomersCount: 1590,
    totalGeneratedInvoices: 30000460,
    uniqueUsersCount: 1760,
  });
  const [visibleCounters, setVisibleCounters] = useState(false); // Track visibility
  const counterRef = useRef(null);

  useEffect(() => {
    // Fetch data from API
    axios
      .get(`${process.env.REACT_APP_API}/metrics/homepage`, {
        headers: { 'Accept-Language': 'en' },
      })
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => console.error('Error fetching stats:', error));
  }, []);

  useEffect(() => {
    // Intersection observer to trigger counter animation when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleCounters(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Counter animation component
  const CounterItem = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (visibleCounters) {
        const increment = Math.ceil(value / 200);
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount + increment >= value) {
              clearInterval(interval);
              return value;
            }
            return prevCount + increment;
          });
        }, 10);
      }
    }, [value, visibleCounters]);

    return (
      <div className="col-5 col-sm-3 single-counter text-center">
        <div className="counter-inner">
          <div className="counter-item">
            <span className="counter-value">{count}+</span>
          </div>
          <h5>{label}</h5>
        </div>
      </div>
    );
  };

  return (
    <section className="section counter-area ptb_50" ref={counterRef}>
      <div className="container">
        <div className="row justify-content-center">
          {/* Total Customers */}
          <CounterItem
            value={stats.totalCustomersCount}
            label={strings.static1 || 'Customers'}
          />
          {/* Total Generated Invoices */}
          <CounterItem
            value={stats.totalGeneratedInvoices}
            label={strings.static2 || 'Invoices'}
          />
          {/* Unique Users */}
          <CounterItem
            value={stats.uniqueUsersCount}
            label={strings.static3 || 'Users'}
          />
        </div>
      </div>

      <style jsx>{`
        .counter-area .container {
          display: row;
          flex-wrap: wrap;
          gap: 30px; /* Space between counter items */
        }

        .counter-area .single-counter {
          flex: 1 1 calc(33.333% - 20px);
          max-width: calc(33.333% - 20px);
          text-align: center;
        }

        .counter-area .counter-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .counter-area .counter-item {
          width: 200px;
          height: 200px;
          border: 3px solid #00544c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .counter-area .counter-item span {
          font-size: 25px;
          font-weight: bold;
          color: #1d2130;
        }

        .counter-area h5 {
          color: #525560;
        }

        /* Media Query for Mobile Devices */
        @media (max-width: 768px) {
          .counter-area .single-counter {
            flex: 1 1 100%;
            max-width: 100%;
          }

          .counter-area .counter-item {
            width: 150px;
            height: 150px;
          }

          .counter-area .counter-item span {
            font-size: 20px;
          }

          .counter-area h5 {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Counter;

