import './Footer.css'
import { Form, Button } from 'react-bootstrap';
export default function Footer(){
    return<>
    <footer className="Footer-Container">
         <div className="Footer-Child1">
            <div className="Footer-Info">
                <h1 className='Info-Heading'>Let’s work together</h1>
                <p className='Info-Paragraph'>This is a template Figma file, turned into code using Anima.
                     Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima.
                      Learn more at AnimaApp.com</p>
                      <div className="Social-Media-Icon">
                      <img src='./Images/Footer-img/Vector1.svg' alt='icon'/>
                      <img src='./Images/Footer-img/facebook.svg' alt='icon'/>
                      <img src='./Images/Footer-img/Vector2.svg' alt='icon'/>
                      <img src='./Images/Footer-img/Vector3.svg' alt='icon'/>
                      <img src='./Images/Footer-img/Vector4.svg' alt='icon'/>
                      </div>
            </div>
            <div className="Footer-Form ontainer mt-5">
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" className='placeholder' placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" className='placeholder' placeholder="Email"/>
        </Form.Group>

        <Form.Group controlId="formBasicFreetext" className='text-area'>
          <Form.Control as="textarea" className='placeholder textarea' rows={3} placeholder="Type your message here" />
        </Form.Group>

        <Button className='form-btn mt-3'  type="submit">Submit</Button>
      </Form>
    </div>
           
         </div>

   <div className="Footer-Child2">
         
      <p>copyright 2024 © By Maya Bishani </p>
       </div>
    </footer>
    
    </>
}