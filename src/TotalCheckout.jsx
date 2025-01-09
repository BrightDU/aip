import React from "react";
import Checkout from "./Checkout";
import Breadcrumb from "./components/Blogs/Breadcrumb";
import strings from './translations'
const TotalCheckout = (props) =>{
    return (
        <>
            <Breadcrumb title={strings.checkout}/>
            <Checkout {...props}/>
        </>
    )
}

export default TotalCheckout;