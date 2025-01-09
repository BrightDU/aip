import React from 'react';
import FreeSubscription from './FreeSubscription';
import Breadcrumb from './components/Blogs/Breadcrumb'
import strings from './translations';
const TotalFreeSubscribtion = ({platformSettings}) =>{
    return (
        <>
        <Breadcrumb title={strings.freeSubscription}/>
        <FreeSubscription platformSettings={platformSettings}/>
        </>
    )
}

export default TotalFreeSubscribtion;