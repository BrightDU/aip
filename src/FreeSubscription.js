import { Component } from 'react'
import './App.css';
import './style.css';

import axios from 'axios';
import GoSellDemo, { makeid } from './GoSell';
import CreateUser from './CreateUser';
import strings from './translations';
import SimpleReactValidator from 'simple-react-validator';
import PlanTerms from './PlanTerms';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactForm from './components/ContactSection/Contact'
let API = process.env.REACT_APP_TEST_API;

class FreeSubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [],
            submitEnabled: false,
            loading: false,
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

        }
        // this.onLoad();
        this.validator = new SimpleReactValidator();
    }




    componentDidMount() {
        // this.init();
    }
    componentDidUpdate(prevProps, prevState) {

        let e = document.querySelector('.nav-link')
        let x = document.querySelector('.nav-item')
        let y = document.querySelector('.navbar')

        if (e && x && y) {

            let c = e.style.color
            // document.querySelectorAll('.nav-link').forEach(i => i.style.color = 'white')
            document.querySelectorAll('div').forEach((i, idx) => {
                if (idx === 1) {
                    i.style.backgroundColor = '#fff'
                    return
                }
            })

            // x.style.color = '#95a8be'
            // y.style.backgroundColor = '#95a8be'
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset()
        this.setState({ loading: true });
        if (!this.state.email || !this.state.phone) {
            // alert('Email and phone are required, please fill them.');
            this.setState({
                loading: false
            });
        }
        else {
            axios.post(`${API}/subscription`, {
                SubscriptionPlanId: "free",
                UserEmail: this.state.email,
                UserPhone: this.state.phone,
                UserName: this.state.name,
                Name: this.state.subName,
                TapId: "chg_free_" + makeid(10),
                SubscriptionInterval: 3
            }).then(({ data }) => {
                this.setState({
                    success: true,
                    loading: false
                })

                axios.post(`${API}/feedback`, {
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    description: `[Lead Captured] New free subscription was created for email ${this.state.email} and phone ${this.state.phone}.`,
                    organizationSize: this.state.organizationSize,
                    industry: this.state.industry,
                    city: this.state.city,
                })
            });
        }
    }

    changeUserField = (e) => {
        e.PreventDefault()
        let user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }

    update = () => {
        this.setState({ validate: true })
    }

    render() {
        // let { plan, user, charge, loading, error } = this.state;
        // let freq = new URLSearchParams(this.props.location.search).get("freq")
        // let planId = new URLSearchParams(this.props.location.search).get("planId")

        if (this.state.success) {
            return <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 text-center">
                        <div className="payment-card success">
                            <div className="mark success">
                                <i className="checkmark">✓</i>
                            </div>
                            <h1 className="success">{strings.success}</h1>
                            <p className="message">{strings.freeSubscriptionDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        }

        return (<div className="container" style={{ padding: '50px' }}>
            {/* <div className="py-5 text-center">
                    <h2>{strings.freeSubscription}</h2>
                </div> */}
            <div className="row" style={{ border: '1px solid #fff', borderRadius: '5px', padding: ' 3rem', backgroundColor: '#039b9152', justifyContent: 'center' }}>
                <div className="row gx-8 gx-lg-8 justify-content-center mb-5">
                    <div className="col-lg-12">
                        {this.state.success && <div class="alert alert-success" role="alert">
                            تم ارسال الرسالة بنجاح
                        </div>}

                        {/* <div className="col-12 col-lg-7">
                            <div className="welcome-intro">
                            <h1 className="text-white">{strings.heroHead}</h1>
                            <p className="text-white my-4">{strings.heroDescription}</p>
                            Store Buttons
                            <div className="button-group store-buttons d-flex">
                            <a href="/demo" className="btn sApp-btn text-uppercase">{strings.demo}</a>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className="col-12 col-md-8 col-lg-5">
                        </div> */}
                        {/* Contact Box */}
                        <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                            {/* Contact Form */}
                            <form id="contact-form" onSubmit={this.submitForm}>
                                <div className="contact-top">
                                    <h3 className="contact-title">{strings.formHeading}</h3>
                                    <h5 className="text-secondary fw-3 py-3">{strings.formText}</h5>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => this.setState({ subName: e.target.value })} className="form-control" name="name" placeholder={strings.name} required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" onChange={(e) => this.setState({ email: e.target.value })} className="form-control" name="email" placeholder={strings.email} required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => this.setState({ phone: e.target.value })} className="form-control" name="phone" placeholder={strings.phone} required="required" />
                                        </div>

                                        <div className="text-center" style={{ margin: 'auto' }}>
                                            <ReCAPTCHA
                                                sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                                                onChange={() => this.setState({ submitEnabled: true })}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="row justify-content-md-center">
                                            </div> */}
                                    {/* <div className="col-lg-1">
                                        </div> */}
                                    <div className="col-12">
                                        <button className="btn btn-bordered w-100 mt-3 mt-sm-4" type="submit" disabled={!this.state.submitEnabled}>{strings.send}</button>
                                        {/* <div className="contact-bottom">
                                <span className="d-inline-block mt-3">{this.state.data.formBtnText} <a href="/#">{this.state.data.formBtnText_2}</a> &amp; <a href="/#">{this.state.data.formBtnText_3}</a></span>
                                </div> */}
                                    </div>
                                </div>
                            </form>
                            <p className="form-message" />
                        </div>
                        {/* 
                        {!this.state.success && <form className="submit-form">
                            {this.state.error && <div class="alert alert-danger" role="alert">
                                <ol>
                                    {this.state.error.map(e => {
                                        e = e.replace("'Name'", "الاسم")
                                        e = e.replace("'Email'", "البريد الالكتروني")
                                        e = e.replace("'Phone'", "رقم الهاتف")
                                        e = e.replace("'Description'", "نص الرسالة")
                                        e = e.replace("'City'", "المدينة")
                                        e = e.replace("'Organization Size'", "حجم الشركة")
                                        e = e.replace("'Industry'", "المجال")
                                        return <li>{e}</li>
                                    })}
                                </ol>
                            </div>}

                            <div className="row" style={{ justifyContent: strings.direction, textAlign: strings.direction }}>
                                <div className="col-lg-12" >
                                    <label for="inputName">{strings.subName}</label>
                                    <input onChange={(e) => this.setState({ subName: e.target.value })} className="form-control" id="inputName" type="text" placeholder="اسم الاشتراك" />
                                </div>
                                <div className="col-lg-6">
                                    <label for="inputName">{strings.subUserName}</label>
                                    <input onChange={(e) => this.setState({ name: e.target.value })} className="form-control" id="inputName" type="text" placeholder="اسم المشترك" />
                                </div>
                                <div className="col-lg-6">
                                    <label for="inputEmail">{strings.email}</label>
                                    <input onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                </div>
                            </div>                                    <div className="row" style={{ justifyContent: strings.direction, textAlign: strings.direction }}>
                                <div className="col-lg-6">
                                    <label for="inputPhone">{strings.phone}</label>
                                    <input onChange={(e) => this.setState({ phone: e.target.value })} className="form-control" id="inputPhone" type="tel" placeholder="(123) 456-7890" />
                                </div>
                                <div className="col-lg-6">
                                    <label for="inputPhone">{strings.industry}</label>
                                    <select onChange={e => this.setState({ industry: e.target.value })} class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="منظمات غير ربحية">منظمات غير ربحية</option>
                                        <option value="مجال الاتصالات">مجال الاتصالات</option>
                                        <option value="الطاقة والموارد">الطاقة والموارد.</option>
                                        <option value="الخدمات المالية">الخدمات المالية.</option>
                                        <option value="الرعاىة الصحية">الرعاىة الصحية.</option>
                                        <option value="التعليم">التعليم</option>
                                        <option value="الفنادق والضيافة">الفنادق والضيافة</option>
                                        <option value="التامين">التامين</option>
                                        <option value="علوم الحياة">علوم الحياة.</option>
                                        <option value="التصنيع">التصنيع</option>
                                        <option value="وسائل الإعلام والترفيه">وسائل الإعلام والترفيه.</option>
                                        <option value="الخدمات المهنية والتجارية">الخدمات المهنية والتجارية.</option>
                                        <option value="الاعمال الحرفية">الاعمال الحرفية</option>
                                        <option value="مبيعات الجملة والتجزئة">مبيعات الجملة والتجزئة</option>
                                        <option value="المطاعم والمقاهي">المطاعم والمقاهي.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                            <div className="row form-group" >
                                <div className="col-lg-6" style={{ textAlign: strings.direction }}>
                                    <label for="inputPhone">{strings.companySize}</label>
                                    <select onChange={e => this.setState({ organizationSize: e.target.value })} class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="مايكرو (1-9) موظفين">مايكرو (1-9) موظفين</option>
                                        <option value="صغيرة (10-50) موظف">صغيرة (10-50) موظف</option>
                                        <option value="متوسط (51-250) موظف">متوسط (51-250) موظف</option>
                                        <option value="كبير (251-1000) موظف">كبير (251-1000) موظف</option>
                                        <option value="(أكثر من 1001) موظف">(أكثر من 1001) موظف</option>
                                    </select>
                                </div>
                                <div className="col-lg-6" style={{ textAlign: strings.direction }}>
                                    <label for="inputPhone">{strings.city}</label>
                                    <select onChange={e => this.setState({ city: e.target.value })} class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="الرياض">الرياض</option>
                                        <option value="جدة">جدة</option>
                                        <option value="الدمام">الدمام</option>
                                        <option value="الخبر">الخبر</option>
                                        <option value="الظهران">الظهران</option>
                                        <option value="الاحساء">الاحساء
                                        </option>
                                        <option value="القطيف">القطيف
                                        </option>
                                        <option value="الجبيل">الجبيل
                                        </option>
                                        <option value="الطائف">الطائف
                                        </option>
                                        <option value="تبوك">تبوك
                                        </option>
                                        <option value="أبها">أبها
                                        </option>
                                        <option value="الباحة">الباحة
                                        </option>
                                        <option value="جيزان">جيزان
                                        </option>
                                        <option value="نجران">نجران
                                        </option>
                                        <option value="حائل">حائل
                                        </option>
                                        <option value="مكة المكرمة">مكة المكرمة
                                        </option>
                                        <option value="المدينة المنورة">المدينة المنورة
                                        </option>
                                        <option value="القصيم">القصيم
                                        </option>
                                        <option value="الجوف">الجوف
                                        </option>
                                        <option value="ينبع">ينبع
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row justify-content-md-center">
                                <div className="col-lg-3">
                                    <div className="text-center" style={{ alignContent: 'center' }}>
                                        <ReCAPTCHA
                                            sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                                            onChange={() => this.setState({ submitEnabled: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                            {this.state.submitEnabled && (<div className="py-3 d-grid"><button onClick={this.submitForm} className="btn-xl" style={{ backgroundColor: '#189d94', color: 'white' }} type="button">{this.state.loading ? <><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only">Loading...</span></> : 'ارسال'
                            }</button>
                            
                            
                            </div>)}


                            {this.state.submitEnabled && (<button onClick={this.submitForm} disabled={this.state.loading} className={`btn-xl ${!this.state.submitEnabled ? 'disabled' : ''}`} style={{ backgroundColor: '#189d94', color: 'white' }} type="button">ارسال</button>)}
                        </form>} */}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default FreeSubscription;

