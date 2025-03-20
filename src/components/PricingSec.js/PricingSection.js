// import React, { Component } from "react";
// import strings from "../../translations";
// import PlanTerms from "../../PlanTerms";
// import { Link } from "react-router-dom";
// import { colors } from "@mui/material";

// class PricingSection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       locale: this.getValidLocale(props.locale),
//       pricingData: [
//         {
//           uuid: "plan1",
//           itemsThreshold: 5000,
//           annualPrice: 100,
        
//           currency: "SAR",
//           translations: [{ title: "Basic Plan" }, { title: "الخطة الأساسية،" }],
//         },
//         {
//           uuid: "plan2",
//           itemsThreshold: 10000,
//           annualPrice: 300,
          
//           currency: "SAR",
//           translations: [{ title: "Premium Plan" }, { title: "مميز،" }],
//         },
//         {
//           uuid: "plan3",
//           itemsThreshold: 500,
//           annualPrice: 500,
        
//           currency: "SAR",
//           translations: [{ title: "Custom Plan" }, { title: "مخصص،" }],
//         },
       
//       ],
//     };
//   }

//   getValidLocale = (loc) => {
//     return strings[loc] ? loc : "en";
//   };

//   freqOnClick = (e) => {
//     const selectedFreq = parseInt(e.target.getAttribute("data-key"), 10);
//     if (selectedFreq !== this.state.freq) {
//       this.setState({ freq: selectedFreq });
//     }
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.locale !== this.props.locale) {
//       this.setState({ locale: this.getValidLocale(this.props.locale) });
//     }
//   }

//   render() {
//     const { freq, locale, pricingData } = this.state;
//     const currentStrings = strings[locale] || strings["en"];

//     return (
//       <section id="pricing" className="section price-plan-area  overflow-hidden ptb_50" style={{backgroundColor:'#ffffff'}}>
//         {/* Section Heading */}
//         <div className="section-heading custom-heading">
//           <h4 className="heading-subtitle">{strings.pricing}</h4>
//           <h2 className="heading-title">{strings.pricingPlans}</h2>
//           <p className="heading-description">{strings.pricingtxt}</p>
//         </div>

//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-md-10 col-lg-7 text-center">
//             </div>
// {/* 
//             Frequency Toggle Section */}
//             {/* <div className="frequency-toggle-wrapper d-flex justify-content-center align-items-center gap-2 text-center"> */}
//               {/* 1 Year Label
//               <span
//                 className={`freq-label1 me-2 ${locale === 'ar' ? 'text-end' : ''}`}
//                 style={{ fontWeight: freq === 2 ? "bold" : "normal", fontSize: "16px", color:'#00998A' }}
//               >
//                 {strings.oneYear}
//               </span> */}

//               {/* Toggle Switch */}
//               {/* <div className="toggle-switch d-flex align-items-center justify-content-center mx-2">
//                 <input
//                   type="checkbox"
//                   id="freqToggle"
//                   checked={freq === 6}
//                   onChange={(e) => this.setState({ freq: e.target.checked ? 6 : 2 })}
//                 />
//                 <label htmlFor="freqToggle" className="toggle-label" />
//               </div> */}

//               {/* 3 Years Label */}
//               {/* <div className="d-flex flex-column align-items-start ms-2">
//                 <span
//                   className={`freq-label2 ${locale === 'ar' ? 'text-end' : ''}`}
//                   style={{ fontWeight: freq === 2 ? "bold" : "normal" }}
//                 >
//                   {strings.threeYears}
//                 </span>
//               </div> */}
//             {/* </div> */}
//           </div>

//           {/* Pricing Cards */}
//           <div className="row price-plan-wrapper justify-content-center">
//             {pricingData.map((item, idx) => {
//               const title = locale === "en" ? item.translations[0].title : item.translations[1].title;
//               return (
//                 <div key={`plan_${idx}`} className="col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center">
//                   <div
//                     className="pricing-card-wrapper text-center"
//                     style={{
//                       width: "100%",
//                       maxWidth: "321px",
//                       height: "100%",
//                       minHeight: "261px",
//                       borderRadius: "20px",
//                       background: "#A9DBDB",
//                       padding: "20px",
//                       position: "relative",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between",
//                       textAlign: "center",
//                     }}
//                   >
//                     {/* Plan Title */}
//                     <div className="plan-title mb-2">
//                       <h4 className="text-uppercase mb-0">{title}</h4>
//                     </div>

//                     {/* Plan Price */}
//                     <div className="plan-price mb-2">
//                       {item.itemsThreshold === -1 ? (
//                         <p className="price">{currentStrings.askForQuote}</p>
//                       ) : (
//                         <>
//                           <p className="mb-1">
//                             <strong>{item.itemsThreshold} {currentStrings.productsPerYear || " for up to 100 Products "}</strong>
//                           </p>
                         
//                         </>
//                       )}
//                     </div>

//                     {/* Plan Features */}
//                     <div className="plan-description mb-2">
//                       <ul className="list-unstyled" style={{ fontSize: "14px", padding: 0, margin: 0 }}>
//                         <li><i className="lni lni-check-mark-circle"></i> Unlimited users</li>
//                         <li><i className="lni lni-check-mark-circle"></i> 24/7 online access</li>
//                         <li><i className="lni lni-check-mark-circle"></i> Tax Exclusive</li>
//                       </ul>
//                     </div>

//                     {/* Select Plan Button */}
//                     <Link
//                       to={`/checkout?planId=${item.uuid}&freq=${freq}`}
//                       className="custom-select-btn" style={{color:'#ffffff'}} 
                      
//                     > 
                    
//                       {currentStrings.select || "Select"}
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Custom CSS */}
//           <style>{`
//             /* Default Styles (Desktop) */
//             .custom-heading {
//               margin-top: 50px;
//               text-align: center;
//             }

//             .heading-subtitle {
//               font-size: 18px;
//             }

//             .heading-title {
//               font-size: 36px;
//               font-weight: 800;
//             }

//             .heading-description {
//               width: 1065px;
//               margin: 10px auto 0;
//             }

//             /* Tablet View */
//             @media (max-width: 991px) {
//               .heading-description {
//                 width: 90%;
//                 font-size: 16px;
//               }

//               .heading-title {
//                 font-size: 30px;
//               }
//             }

//             /* Mobile View */
//             @media (max-width: 576px) {
//               .heading-description {
//                 width: 100%;
//                 font-size: 14px;
//                 padding: 0 15px;
//               }

//               .heading-title {
//                 font-size: 24px;
//               }

//               .heading-subtitle {
//                 font-size: 12px;
//               }
//             }

//             .freq-label2 {
//               font-size: 16px;
//             }

//             .frequency-toggle-wrapper {
//               gap: -3px; /* Controls spacing between items */
//               margin-top: 15px;
//               justify-content: center;
//               align-items: center;
//               margin-right: ${locale === "ar" ? "-700px" : ""};
              
//             }

//              .frequency-toggle-wrapper {
//               gap: -3px; /* Controls spacing between items */
//               margin-top: 15px;
//               justify-content: center;
//               align-items: center;
            
//                margin-left: ${locale === "en" ? "-250px" : "0"};
//             }

//             @media (max-width: 768px) {
//               .frequency-toggle-wrapper {
//                 gap: -3px; /* Controls spacing between items */
//                 margin-top: 15px;
//                 justify-content: center;
//                 align-items: center;
//                 margin-right: ${locale === "ar" ? "-20px" : "0"};
//               }



//                .frequency-toggle-wrapper {
//                 gap: -3px; /* Controls spacing between items */
//                 margin-top: 15px;
//                 justify-content: center;
//                 align-items: center;
//                 margin-left: ${locale === "en" ? "40px" : "0"};
//               }
//             }

//             .freq-label1,
//             .freq-label {
//               font-size: 16px;
//               color: #00998A;
//               margin: 0;
//             }

//             .toggle-switch {
//               position: relative;
//               width: 50px;
//               height: 24px;
//             }

//             .toggle-switch input[type="checkbox"] {
//               display: none;
//             }

//             .toggle-label {
//               position: absolute;
//               top: 0;
//               left: 2px;
//               width: 50px;
//               height: 24px;
//               background-color: #ccc;
//               border-radius: 24px;
//               cursor: pointer;
//               transition: background-color 0.3s ease;
//             }

//             .toggle-label::after {
//               content: "";
//               position: absolute;
//               top: 2px;
//               left: 2px;
//               width: 20px;
//               height: 20px;
//               background-color: white;
//               border-radius: 50%;
//               transition: transform 0.3s ease;
//             }

//             .toggle-switch input[type="checkbox"]:checked + .toggle-label {
//               background-color: #00998A;
//             }

//             .toggle-switch input[type="checkbox"]:checked + .toggle-label::after {
//               transform: translateX(26px);
//             }

//             .custom-select-btn {
//               width: 157px;
//               height: 58.5px;
//               background: linear-gradient(245.49deg, #00998A 15.66%, #71C6BE 84.34%);
//               border-radius: 10px;
//               padding: 10px 20px;
//               box-shadow: 0px 5px 20px rgba(0,0,0,0.08);
             
//               color: #fff;
//               hover:color:#fff;
//               font-weight: bold;
//               border: none;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               position: absolute;
//               bottom: -29px;
//               left: 50%;
//               transform: translateX(-50%);
//               text-align: center;
//               text-decoration: none;
//               z-index: 2;
//               font-size: 15px;
//             }
//           `}</style>
//         </div>
//       </section>
//     );
//   }
// }

// export default PricingSection;








import React, { Component } from "react";
import strings from "../../translations";
import { Link } from "react-router-dom";

class PricingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.getValidLocale(props.locale),
      pricingData: [
        {
          uuid: "plan1",
          price: 5000,
          translations: [{ title: "Basic Plan" }, { title: "الخطة الأساسية" }],
          description: [{ title: "For up to 100 products" }, { title: "حتى 100 منتج" }]
        },
        {
          uuid: "plan2",
          price: 10000,
          translations: [{ title: "Premium Plan" }, { title: "الخطة المميزة" }],
          description: [{ title: "For up to 1000 products" }, { title: "حتى 1000 منتج" }]
        },
        {
          uuid: "plan3",
          translations: [{ title: "Customization" }, { title: "التخصيص" }],
          description: [
            { title: "Custom pricing for unlimited products and advanced features." },
            { title: "تسعير مخصص لعدد غير محدود من المنتجات والميزات المتقدمة." }
          ]
        },
      ],
    };
  }

  getValidLocale = (loc) => {
    return strings[loc] ? loc : "en";
  };

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.setState({ locale: this.getValidLocale(this.props.locale) });
    }
  }

  render() {
    const { locale, pricingData } = this.state;
    const currentStrings = strings[locale] || strings["en"];

    return (
      <section
        id="pricing"
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        {/* Section Heading */}
        <div className="section-heading custom-heading">
          <h4 className="heading-subtitle">{strings.pricing}</h4>
          <h2 className="heading-title">{strings.pricingPlans}</h2>
          <p className="heading-description">{strings.pricingtxt}</p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {pricingData.map((item, idx) => {
            const title = locale === "en"
              ? item.translations[0].title
              : item.translations[1].title;

            const description = locale === "en"
              ? item.description[0].title
              : item.description[1].title;

            return (
              <div
                key={`plan_${idx}`}
                style={{
                  flex: "0 0 300px",
                  maxWidth: "321px",
                  minHeight: "280px",
                  borderRadius: "20px",
                  backgroundColor: "#A9DBDB",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                {/* Title */}
                <h4
                  style={{
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    color: "#004D4D",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  {title}
                </h4>

                {/* Price (only if it's not the third card) */}
                {item.price && (
                  <>
                    <h5
                      style={{
                        fontWeight: "bold",
                        fontSize: "28px",
                        marginBottom: "0px",
                        color: "#000",
                      }}
                    >
                      {item.price} {item.currency || "SAR"}
                    </h5>
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "0px",
                        color: "#555",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      SAR/MONTH
                    </p>
                  </>
                )}

                {/* Description */}
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "15px",
                  }}
                >
                  {description}
                </p>

                {/* Button */}
                {idx !== 2 ? (
                  <Link
                    to={`/checkout?planId=${item.uuid}`}
                    style={{
                      color: "#fff",
                      backgroundColor: "#00998A",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "14px",
                      display: "inline-block",
                      marginTop: "10px",
                    }}
                  >
                    {currentStrings.select || "Select"}
                  </Link>
                ) : (
                  <button
                    style={{
                      color: "#fff",
                      backgroundColor: "#00998A",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      fontWeight: "500",
                      fontSize: "14px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    {currentStrings.contactSales || "Contact Sales"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default PricingSection;
