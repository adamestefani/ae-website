import React, { useContext } from 'react'
import { Input, Button, Textarea } from '../../util/forms/form-items'
import submitEmailForm from '../../service/submitEmailForm'
import GlobalContext from '../../../context/globalContext'

const Contact = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)

  return (
    <div
      className={
        activeMenuItem === 'contact' ? 'page-content target' : 'page-content'
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
          <img
            src="https://s3.amazonaws.com/adamestefaniphoto/portfolio/thumbs/img_017.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
