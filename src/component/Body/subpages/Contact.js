import React from 'react'
import { Input, Button, Textarea } from '../../util/forms/form-items'
import submitEmailForm from '../../service/submitEmailForm'

export default class Contact extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.activeMenuItem === 'contact'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className="page-title">Contact</h1>
        <div className="contact-area">
          <div className="contact-text">
            <form>
              <Input name="your-name" label="Your name" />
              <Input name="your-email" label="Your email" />
              <Input name="subject" label="Subject" />
              <Textarea name="your-message" label="Your message" />
              <Button type="button" label="Send" onClick={submitEmailForm} />
            </form>
          </div>
          <div className="contact-picture">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    )
  }
}
