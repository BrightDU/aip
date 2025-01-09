import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { Route, Switch } from "react-router";
import Checkout from './Checkout';
import strings from './translations';
import 'react-accessible-accordion/dist/fancy-example.css';

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            organizationSize: '',
            industry: '',
            city: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            plans:[]
        }
    }

    render() {

        return <div className="container" style={{ padding: '50px' }}>
            <div className="py-5 text-center">
                <h2>{strings.faq}</h2>
            </div>
            <div className="row">
                <Accordion allowZeroExpanded>
                    {Array.from(Array(15), (_, index) => <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {strings[`faqLineH${index + 1}`]}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {strings[`faqLineC${index + 1}`]}
                        </AccordionItemPanel>
                    </AccordionItem>
                    )}
                </Accordion>
            </div>
            </div>

        
    }
}

export default Faq;

