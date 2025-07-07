import React, { Component } from 'react'
import { ToastContainer as Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //styles to Toast
import { capitalizeName } from '../../utils';
import {
  ContactContainer,
  ContactCopyPasswordBtn,
  ContactEmail,
  ContactRow
} from './ContactElements';
import {
  COPY,
  DEFAULT_TOAST_AUTOCLOSE,
  EMAIL
} from '../../constants/GeneralConstants';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { email: process.env.REACT_APP_EMAIL };
  }

  copyToClipboard = () => {
    const { email } = this.state;
    navigator.clipboard.writeText(email).then(() => {
      console.log('Email copied to clipboard!');
      //this.showToast('✅ Email copied to clipboard! ✅')
    }).catch(err => {
      console.error('Failed to copy: ', err);
      //this.showToast('❌ Failed to copy the email ❌')
    });
  };

  showToast = (text) => {
    toast.success(
      <div>{text}</div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: DEFAULT_TOAST_AUTOCLOSE,
        closeOnClick: true,
        icon: false,
        hideProgressBar: true
      }
    );
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <ContactContainer>
          <ContactEmail>{email}</ContactEmail>
          <ContactRow>
            <ContactCopyPasswordBtn onClick={() => {
              this.copyToClipboard();
              this.showToast('Email copied to clipboard!')
            }}>
              {capitalizeName(COPY)} {capitalizeName(EMAIL)}
            </ContactCopyPasswordBtn>
          </ContactRow>
        </ContactContainer>
        <Toast toastStyle={{ textAlign: "center", color: "white", backgroundColor: "green" }} />
      </>
    )
  }
}

export default Contact;
