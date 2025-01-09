import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { Route, Switch } from "react-router";
import Checkout from './Checkout';
import strings from './translations';

let API = process.env.REACT_APP_API;

class ContactUsForm extends Component {
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
            plans: []
        }
    }

    componentDidMount() {
        axios.get(API + "/subscriptionPlan/list").then(({ data }) => {
            this.setState({ plans: data });
        }).catch(() => {
            this.setState({ plans: [] });
        });
    }


    submitForm = () => {
        this.setState({ error: null })
        axios.post(`${API}/feedback`, { ...this.state }, {
            headers: {
                "accept-language": "ar"
            }
        }).then((m) => {
            this.setState({
                name: '',
                email: '',
                phone: '',
                description: ''
            })
            this.setState({ success: true })
        }).catch((e) => {
            if (e.response) {
                let { data, status } = e.response;
                if (status == 400) {
                    let list = [];
                    Object.keys(data.errors).map(key => {
                        list.push(data.errors[key][0]);
                    })
                    this.setState({ error: list });
                } else {
                    this.setState({ error: "حدث خطأ تقني!" })
                }
            }
            else {
                this.setState({ error: "حدث خطأ تقني!" })
            }
        })
    }

    render() {
        let { plans } = this.state;
        return (
            <div className="container px-8 px-lg-8" style={{ marginTop: '20px' }}>
                <div className="row gx-8 gx-lg-8 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center" id="contact">
                        <h2 className="mt-0">{strings.contactUs}</h2>
                        <hr className="divider" />
                        {/* <!-- <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>  */}
                    </div>
                </div>
                <div className="row gx-8 gx-lg-8 justify-content-center mb-5">
                    <div className="col-lg-12">
                        {this.state.success && <div class="alert -success" role="alert">
                            تم ارسال الرسالة بنجاح
                        </div>}

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

                            <div className="row">
                                <div className="col-lg-6">
                                    <label for="inputName">{strings.name}</label>
                                    <input onChange={(e) => this.setState({ name: e.target.value })} className="form-control" id="inputName" type="text" placeholder={strings.name} />
                                </div>
                                <div className="col-lg-6">
                                    <label for="inputEmail">{strings.email}</label>
                                    <input onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                </div>
                            </div>                                    <div className="row">
                                <div className="col-lg-6">
                                    <label for="inputPhone">{strings.phone}</label>
                                    <input onChange={(e) => this.setState({ phone: e.target.value })} className="form-control" id="inputPhone" type="tel" placeholder="(123) 456-7890" />
                                </div>
                                <div className="col-lg-6">
                                    <label for="inputPhone">{strings.industry}</label>
                                    <select onChange={e => this.setState({ industry: e.target.value })} class="form-select" aria-label="Default select example">
                                        <option selected>{strings.industry}</option>
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
                            </div>                                    <div className="row">
                            </div>                                    <div className="row">
                                <div className="col-lg-6">
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
                                <div className="col-lg-6">
                                    <label for="inputPhone">{strings.city}</label>
                                    <select onChange={e => this.setState({ city: e.target.value })} class="form-select" aria-label="Default select example">
                                        <option selected disabled></option>
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

                            <div className="form-group">
                                <label for="inputMessage">{strings.message}</label>
                                <textarea onChange={(e) => this.setState({ description: e.target.value })} className="form-control" id="inputMessage" type="text" placeholder={strings.messagePlaceHolder} style={{ "height": "10rem" }}></textarea>
                            </div>
                            <div className="d-grid"><button onClick={this.submitForm} className="btn-xl" style={{ backgroundColor: '#189d94', color: 'white' }} type="button">{strings.send}</button></div>
                        </form>}
                    </div>
                </div>
                <div className="row gx-12 gx-lg-12 justify-content-center">

                    <div class="col-lg-12 text-center mb-5 mb-lg-0" style={{ "margin": "10px" }}>
                        <a href="https://www.facebook.com/armsforit/" class="fa fa-facebook" style={{ "font-size": "x-large", "margin": "10px", "text-decoration": "none" }}></a>
                        <a href="https://twitter.com/arms_it" class="fa fa-twitter" style={{ "font-size": "x-large", "margin": "10px", "text-decoration": "none" }}></a>
                        <a href="https://www.instagram.com/armsit001/" class="fa fa-instagram" style={{ "font-size": "x-large", "margin": "10px", "text-decoration": "none" }}></a>
                        <a href="https://www.linkedin.com/company/72392544" class="fa fa-linkedin" style={{ "font-size": "x-large", "margin": "10px", "text-decoration": "none" }}></a>
                    </div>

                    <div className="col-lg-12 text-center mb-5 mb-lg-0" style={{ "margin": "10px", "direction": "ltr" }}>
                        <div>{strings.contactWhatsupp}</div>
                        <a href="https://api.whatsapp.com/send?phone=966540963570"><i className="bi bi-whatsapp fs-2 mb-3 text-muted"></i></a>
                        {/* <div> +966 (50) 915-3401</div> */}
                    </div>
                    <div className="col-lg-12 text-center mb-5 mb-lg-0" style={{ "margin": "10px", "direction": "ltr" }}>
                        <div>{strings.contactPhone}</div>
                        <ul>
                            <li><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/phone_icon_136322.png" alt='phone' style={{ width: '20px', marginRight: '5px' }} />966540963570</li>
                            <li><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/phone_icon_136322.png" alt='phone' style={{ width: '20px', marginRight: '5px' }} />966540963890</li>
                            <li><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/phone_icon_136322.png" alt='phone' style={{ width: '20px', marginRight: '5px' }} />966540965840</li>
                            <li><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/phone_icon_136322.png" alt='phone' style={{ width: '20px', marginRight: '5px' }} />966540967210</li>

                        </ul>
                        {/* <span className="">
                        966540963570
                        </span>
                        <span className="phoneNo">
                        966540963890
                        </span>
                        <span className="phoneNo">
                        966540965840
                        </span>
                        <span className="phoneNo">
                        966540967210
                        </span> */}
                        {/* <div> +966 (50) 915-3401</div> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default ContactUsForm;

