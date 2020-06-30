import React, { Component } from 'react';
import documentImage from './Address_Change_Document.pdf';
import FileViewer from 'react-file-viewer';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import axios from 'axios';

const file = documentImage
const type = 'pdf'

class CustomerDetails extends Component {
  constructor (props){
    super(props);
    this.state = {
      existingpermanenetaddressLine1:'Building No. 13',
      existingpermanenetaddressLine2:'#12-456',
      existingpermanenetaddressLine3:'One Raffles Place Tower 1',
      existingpermanenetaddressLine4:'Kay Poh Road',
      existingpermanenetcountry:'Singapore',
      existingpermanenetpincode:'248973',
      existingCurrentaddressLine1:'SDX-13',
      existingCurrentaddressLine2:'#15-457',
      existingCurrentaddressLine3:'United Overseas Bank Plaza One',
      existingCurrentaddressLine4:'Kay Poh Road',
      existingpermanenetcountry:'Singapore',
      existingpermanenetpincode:'560102',
      policyownerfirstname:'Catherine',
      policyownerlastname:'Lim',
      passportnumber:'K000000E',
      dob:'1993-07-23',
      residentialaddressline1:'Building No. 13',
      residentialaddressline2:'#12-456',
      residentialaddressline3:'One Raffles Place Tower 1',
      residentialaddressline4:'Kay Poh Road',
      residentialcountry:'Singapore',
      residentialpincode:'248973',
      policynumber1:'9786543',
      policynumber2:'1657658',
      policynumber3:'5674258',
      policynumber4:'2345426',
      policynumber5:'',
      policynumber6:'',
      mailingaddressline1:'SDX-13',
      mailingaddressline2:'#15-457',
      mailingaddressline3:'United Overseas Bank Plaza One',
      mailingaddressline4:'Kay Poh Road',
      mailingcountry:'Singapore',
      mailingpincode:'560102',
      mobilenumber:'+6515469648',
      officenumber:'',
      homenumber:'',
      email:'',
      note:'',
      status:''
    }
  }
  changeHandler = e =>{
    this.setState({[e.target.name] : e.target.value});
  }
  submitHandler = e =>{
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/thankyou')
  }
  onClickHandler = e=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
     return (
        <div className="customer-details">
          <div className="header-details">
            <div>
            <div className="form-side-one">
              <p className="title-style">Existing Permanent Address : </p>
              <div className="form-side-one">
                <label for="existingpermanenetaddressLine1">Blk/House No. : </label>
                <label for="existingpermanenetaddressLine1">{this.state.existingpermanenetaddressLine1}</label><br /><br />
                <label for="existingpermanenetaddressLine3">Building : </label>
                <label for="existingpermanenetaddressLine3">{this.state.existingpermanenetaddressLine3}</label><br /><br />
                <label for="existingpermanenetcountry">Country  : </label>
                <label for="existingpermanenetcountry">{this.state.existingpermanenetcountry}</label><br /><br />               
              </div>
              <div className="form-side-two">
                <label for="existingpermanenetaddressLine2">Unit No. : </label>
                <label for="existingpermanenetaddressLine2">{this.state.existingpermanenetaddressLine2}</label><br /><br />
                <label for="existingpermanenetaddressLine4">Street : </label>
                <label for="existingpermanenetaddressLine4">{this.state.existingpermanenetaddressLine4}</label><br /><br />
                <label for="existingpermanenetpincode">Postal Code : </label>
                <label for="existingpermanenetpincode">{this.state.existingpermanenetpincode}</label><br /><br />
              </div>
            </div>
            <div className="form-side-two">
              <p className='title-style'>Existing Current Address : </p>
              <div className="form-side-one">
                <label for="existingCurrentaddressLine1">Blk/House No. : </label>
                <label for="existingCurrentaddressLine1">{this.state.existingCurrentaddressLine1}</label><br /><br />
                <label for="existingCurrentaddressLine3">Building : </label>
                <label for="existingCurrentaddressLine3">{this.state.existingCurrentaddressLine3}</label><br /><br />
                <label for="existingCurrentcountry">Country  : </label>
                <label for="existingCurrentcountry">{this.state.existingCurrentcountry}</label><br /><br />
              </div>
              <div className="form-side-two">
                <label for="existingCurrentaddressLine2">Unit No. : </label>
                <label for="existingCurrentaddressLine2">{this.state.existingCurrentaddressLine2}</label><br /><br />
                <label for="existingCurrentaddressLine4">Street : </label>
                <label for="existingCurrentaddressLine4">{this.state.existingCurrentaddressLine4}</label><br /><br />
                <label for="existingCurrentpincode">Postal Code : </label>
                <label for="existingCurrentpincode">{this.state.existingCurrentpincode}</label><br /><br />
              </div>
            </div>
          </div>
          </div>
          <div className = "SectionTab">
            <div>
              <h4 className = "MyTitle">Change Address</h4>                 
            </div>
          </div>
          <div className="details-section">
            <form onSubmit={this.submitHandler}>
            <h3 className = "section-header">Request Details</h3>
            <div className = "form-layout">
              <div className="layout-full">
                <h4 className="sub-section-header">Personal Details</h4>
                <div className="form-side-one">
                  <label for="policyownerfirstname">Policy Owner First name : </label><br />
                  <input type="text" name="policyownerfirstname" value={this.state.policyownerfirstname} onChange={e=>this.changeHandler(e)} /><br /><br />
                  <label >NRIC/Passport Number : </label><br />
                  <input type="text" name="passportnumber" value={this.state.passportnumber} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
                <div className="form-side-two">
                  <label for="policyownerlastname">Policy Owner Last name : </label><br />
                  <input type="text" name="policyownerlasttname" value={this.state.policyownerlastname} onChange={e=>this.changeHandler(e)} /><br /><br />
                  <label for="dob">Date of Birth : </label><br />
                  <input type="date" name="dob" value={this.state.dob} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
              </div>

              <div className="layout-full">
                <h4 className="sub-section-header">Residential Address</h4>
                <div className="form-side-one">
                  <label for="residentialaddressline1">Blk/House No. : </label><br />
                  <input type="text" name="residentialaddressline1" value={this.state.residentialaddressline1} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="residentialaddressline3">Building : </label><br />
                  <input type="text" name="residentialaddressline3" value={this.state.residentialaddressline3} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="residentialcountry">Country : </label><br />
                  <input type="text" name="residentialcountry" value={this.state.residentialcountry} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
                <div className="form-side-two">
                  <label for="residentialaddressline2">Unit No. :</label><br />
                  <input type="text" name="residentialaddressline2" value={this.state.residentialaddressline2} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="residentialaddressline4">Street : </label><br />
                  <input type="text" name="residentialaddressline4" value={this.state.residentialaddressline4} onChange={e=>this.changeHandler(e) }/><br /><br />
                  <label for="residentialpincode">Postal Code : </label><br />
                  <input type="text" name="residentialpincode" value={this.state.residentialpincode} onChange={e=>this.changeHandler(e)} /><br /><br />
                  
                </div>
              </div>
              <div className="layout-full">
                <h4 className="sub-section-header">Mailing Address</h4>
                <label for="fname">List of Policy No. : </label><br />
                <table className="list-of-policy">
                    <tbody>
                      <tr>
                        <td>1.<input type="text" name="policynumber1" value={this.state.policynumber1} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                        <td>2.<input type="text" name="policynumber2" value={this.state.policynumber2} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                        <td>3.<input type="text" name="policynumber3" value={this.state.policynumber3} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                      </tr>
                      <tr>
                      <td>4<input type="text" id="fname" name="policynumber4" value={this.state.policynumber4} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                      <td>5<input type="text" id="fname" name="policynumber5" value={this.state.policynumber5} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                      <td>6<input type="text" id="fname" name="policynumber6" value={this.state.policynumber6} onChange={e=>this.changeHandler(e)}/><br /><br /></td>
                      </tr>
                    </tbody>
                  </table>

                <div className="form-side-one">
                  <label for="mailingaddressline1">Blk/House No. : </label><br />
                  <input type="text" name="mailingaddressline1" value={this.state.mailingaddressline1} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="mailingaddressline3">Building : </label><br />
                  <input type="text" name="mailingaddressline3" value={this.state.mailingaddressline3}/><br /><br />
                  <label for="mailingcountry">Country : </label><br />
                  <input type="text" name="mailingcountry" value={this.state.mailingcountry}/><br /><br />
                </div>
                <div className="form-side-two">
                  <label for="mailingaddressline3">Unit No. :</label><br />
                  <input type="text" name="mailingaddressline2" value={this.state.mailingaddressline2} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="mailingaddressline4">Street : </label><br />
                  <input type="text" name="mailingaddressline4" value={this.state.mailingaddressline4} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="mailingpincode">Postal Code : </label><br />
                  <input type="text" name="mailingpincode" value={this.state.mailingpincode} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
              </div>
              <div className = "layout-full">
                <h4 className="sub-section-header">Contacted Details</h4>
                <div className="form-side-one">
                  <label for="mobilenumber">Mobile Number : </label><br />
                  <input type="text" name="mobilenumber" value={this.state.mobilenumber} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="officenumber" >Office Number : </label><br />
                  <input type="text" name="officenumber" value={this.state.officenumber} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
                <div className="form-side-two">
                  <label for="homenumber">Home Number : </label><br />
                  <input type="text" name="homenumber" value={this.state.homenumber} onChange={e=>this.changeHandler(e)}/><br /><br />
                  <label for="email">Email : </label><br />
                  <input type="text" name="email" value={this.state.email} onChange={e=>this.changeHandler(e)}/><br /><br />
                </div>
              </div>
              <div>
               <label >Note : </label><br />
                <textarea name="note" value={this.state.note} onChange={e=>this.changeHandler(e)}/><br /><br />
              </div>
              
              
            </div>
            <div className="form-button">
              <input name='status' type="submit" value="Approve" className="form-approve-button" onClick={e=>this.onClickHandler(e)}/>
              <input name='status' type="submit" value="Reject" className="form-reject-button" onClick={e=>this.onClickHandler(e)}/><br /><br />  
            </div>    
            
            </form>
          </div>
          <div className="image-section">
          <FileViewer
            fileType={type}
            filePath={file}
            onError={this.onError}
          />          
         </div>
      </div>
    );
  }
  onError(e) {
    console.log(e, 'error in file-viewer');
  }
}

export default CustomerDetails;
