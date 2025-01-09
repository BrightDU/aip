import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { Route, Switch } from "react-router";
import Checkout from './Checkout';

let API = process.env.REACT_APP_API;

class Homepage extends Component {
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
        this.onLoad();
    }


    onLoad = async () => {

        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let counterStart = "Dec 04, 2021 00:00:00",
            countDown = new Date(counterStart).getTime(),

            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById("days").innerText = Math.floor(distance / (day));
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {

                    console.log("expierd");

                    clearInterval(x);
                }
            }, 0)


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
        let {plans} = this.state;
        return (
            <div style={{ "direction": "rtl" }} id="page-top">
                <header className="masthead">
                    <div className="container px-4 px-lg-5 h-100">
                        <div style={{ "margin-top": "48px" }} className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-8 align-self-end">
                                <h1 className="text-white font-weight-bold">اطلب استشارتك المجانية الان</h1>
                                <hr className="divider" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 mb-5">منظومــة الفوتــرة اإللكترونيــة هــي إجــراء يهــدف إلــى تحويـل عمليـة اصـدار الفواتيـر والاشعارات الورقيـة الـى عمليــة الكترونيــة تســمح بتبــادل الفواتيــر ,الاشعارات المدينة والدائنة ومعالجتها بصيغة الكترونية منظمة بيـن البائـع والمشـتري بتنسـيق إلكترونـي متكامـل
                                </p>

                                <a className="btn btn-primary btn-xl" href="#contact">تجربة مجانية</a>
                            </div>

                            <div id="countdown" style={{ "text-align": "center", }}>
                                <ul>
                                    <li className="li_de"><span id="days"></span>يوم</li>
                                    <li className="li_de"><span id="hours"></span>ساعة</li>
                                    <li className="li_de"><span id="minutes"></span>دقيقة</li>
                                    <li className="li_de"><span id="seconds"></span>ثواني</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </header>

                {plans.length>0&& <section id="pricing" class="bg-white">
                    <div class="container">
                        <div className="row gx-4 gx-lg-5 justify-content-center" style={{marginTop:'20px'}}>
                            <div className="col-lg-8 col-xl-6 text-center">
                                <h2 className="mt-0">!الاسعار</h2>
                                <hr className="divider" />
                                {/* <!-- <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>  */}
                            </div>
                        </div>
                        <div class="spacer spacer-line border-primary">&nbsp;</div>
                        <div class="spacer">&nbsp;</div>
                        <div class="row">
                            {plans.map(plan=>{
                                return <div class="col-md-4">
                                <div class="pricing-table">
                                    <div class="pricing-table-title">
                                        <h5 class="pricing-title bg-info-hover text-white">STARTER</h5>
                                    </div>
                                    <div class="pricing-table-price text-center bg-info">
                                        <p class="title-font">
                                            <span class="pricing-period text-white mr-1">From</span>
                                            <span class="pricing-currency text-white">$</span>
                                            <span class="pricing-price text-white">9.99</span>
                                            <span class="pricing-period text-white">/ Mo.</span>
                                        </p>
                                    </div>
                                    <div class="pricing-table-content">
                                        <ul>
                                            <li><strong>Basic Package</strong></li>
                                            <li><strong>1 Intermediate</strong></li>
                                            <li><strong>Business Start</strong></li>
                                            <li><strong><del>Professional Features</del></strong></li>
                                            <li><strong><del>Extra Options</del></strong></li>
                                            <li><strong>24/7 Support</strong></li>
                                        </ul>
                                        <div class="pricing-table-button">
                                            <a href="#x" class="btn btn-info"><span>Request Quote</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })}
                        </div>
                    </div>
                </section>}



                <section className="page-section" id="contact">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <h2 className="mt-0">!اتصل بنا</h2>
                                <hr className="divider" />
                                {/* <!-- <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>  */}
                            </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                            <div className="col-lg-6">
                                {this.state.success && <div class="alert alert-success" role="alert">
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
                                            <label for="inputName">الاسم</label>
                                            <input onChange={(e) => this.setState({ name: e.target.value })} className="form-control" id="inputName" type="text" placeholder="الاسم" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label for="inputEmail">البريد الالكتروني</label>
                                            <input onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                        </div>
                                    </div>                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label for="inputPhone">رقم الهاتف</label>
                                            <input onChange={(e) => this.setState({ phone: e.target.value })} className="form-control" id="inputPhone" type="tel" placeholder="(123) 456-7890" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label for="inputPhone">المجال</label>
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
                                            </select>                                        </div>
                                    </div>                                    <div className="row">
                                    </div>                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label for="inputPhone">حجم الشركة</label>
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
                                            <label for="inputPhone">المدينة</label>
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

                                    <div className="form-group">
                                        <label for="inputMessage">نص الرسالة</label>
                                        <textarea onChange={(e) => this.setState({ description: e.target.value })} className="form-control" id="inputMessage" type="text" placeholder="ادخل رسالتك هنا" style={{ "height": "10rem" }}></textarea>
                                    </div>
                                    <div className="d-grid"><button onClick={this.submitForm} className="btn btn-primary btn-xl" type="button">ارسال</button></div>
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

                            <div className="col-lg-4 text-center mb-5 mb-lg-0" style={{ "margin": "10px", "direction": "ltr" }}>
                                <div>لتواصل عبر الواتس اب</div>
                                <a href="https://api.whatsapp.com/send?phone=966540963570"><i className="bi bi-whatsapp fs-2 mb-3 text-muted"></i></a>
                                {/* <div> +966 (50) 915-3401</div> */}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;

