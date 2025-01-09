import React from "react";
import Checkout from "./Checkout";
import Breadcrumb from "./components/Blogs/Breadcrumb";
import strings from './translations'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
let API = process.env.REACT_APP_API;

const ReferralForm = ({ platformSettings }) => {

    var { id } = useParams();

    useEffect(() => {
        if (platformSettings['ReferralFeatureEnabled']?.value == '1') {
            axios.get(`${API}/referral/${id}`, {
                headers: {
                    "Accept-Language": strings.getLanguage()
                }
            }).then(({ data }) => {
                axios.post(`${API}/referral/track`, {
                    trackingId: id,
                    action: 1
                }).then(() => {
                    window.location.href = '/#pricing'
                });
                localStorage.setItem('referral', JSON.stringify(data));
            })
        }
        else {
            localStorage.removeItem('referral');
            if(Object.keys(platformSettings).length>0)
            {
                window.location.href = '/#pricing'
            }
        }
    }
        , [id]);

    return (
        <>
            {/* <h1></h1> */}
            {/* <Breadcrumb title={strings.checkout}/> */}
            {/* <Checkout/> */}
        </>
    )

}

export default ReferralForm;