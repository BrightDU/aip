import React, { Component } from "react";
import strings from '../../translations';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends Component {

  constructor(props) {
    super(props)
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

  // state = {
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // }

  // changHandler = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  submitHangler = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.refs.myForm.reset()
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    console.log(this.state)
  }
  submitForm = () => {
    this.setState({ error: null })
    axios.post(`${process.env.REACT_APP_API}/feedback`, { ...this.state }, {
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
                    list.push(<p style={{color:'red !important;'}}>{data.errors[key][0]}</p>);
                })
                this.setState({ error: list });
            } else {
                this.setState({ error: "حدث خطأ تقني!" })
            }
        }
        else {
            this.setState({ error: "حدث خطأ تقني!" })
        }
        this.setState({ showCaptcha: false });
    })
}

  render() {
    if(this.state.success)
    {
      return <div className="contact-box text-center">
        <p>{strings.quotaSuccessMessage}</p>
      </div>
    }

    return (
      <div className="contact-box text-center">
        {this.state.error ? <div className="contact-box text-center">
        <span>{this.state.error}</span>
      </div>:''}
        <form
          ref='myForm'
          onSubmit={this.submitHangler}
          className="contact-form"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={strings.name}
                  required="required"
                  
                  value={this.state.name}
                  style={{textAlign: strings.direction}}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={strings.email}
                  required="required"
                 
                  value={this.state.email}
                  style={{textAlign: strings.direction}}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  name="subject"
                  placeholder={strings.phone}
                  required="required"
                
                  value={this.state.subject}
                  style={{textAlign: strings.direction}}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              < div className="form-group">
                <select className="form-control selectOptions" onChange={e => this.setState({ industry: e.target.value })} class="form-select" aria-label="Default select example" style={{textAlign: strings.direction}}>
                  {/* <optgroup label={strings.industry}/> */}
                  <option >{strings.industry}</option>
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
              <div className="form-group">
                <select onChange={e => this.setState({ organizationSize: e.target.value })} class="form-select" aria-label="Default select example" style={{textAlign: strings.direction}}>
                  <option selected>{strings.companySize}</option>
                  <option value="مايكرو (1-9) موظفين">مايكرو (1-9) موظفين</option>
                  <option value="صغيرة (10-50) موظف">صغيرة (10-50) موظف</option>
                  <option value="متوسط (51-250) موظف">متوسط (51-250) موظف</option>
                  <option value="كبير (251-1000) موظف">كبير (251-1000) موظف</option>
                  <option value="(أكثر من 1001) موظف">(أكثر من 1001) موظف</option>
                </select>
              </div>
              <div className='form-group'>
              <select onChange={e => this.setState({ city: e.target.value })} class="form-select" aria-label="Default select example" style={{textAlign: strings.direction}}>
                                        <option selected>{strings.city}</option>
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
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder={strings.message}
                  required="required"
                  onChange={(e) => this.setState({ description: e.target.value })}
                  value={this.state.message}
                  style={{textAlign: strings.direction}}
                />
              </div>
              <div className="col-12">



                {/* <label for="inputPhone">{strings.industry}</label> */}
              </div>
            </div>
            <div className="col-12">

              {!this.state.showCaptcha ? <button
                onClick={() => this.setState({ showCaptcha: true })}
                type="submit"
                className="btn btn-lg btn-block mt-3"><span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>
                {strings.send}
              </button> : <div className="text-center" style={{ margin: 'auto' }}>
                <ReCAPTCHA
                  sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                  onChange={()=>this.submitForm()}
                />
              </div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;