import './Clients.css'
import Card from 'react-bootstrap/Card';
const cardDataClients = [
  {
    title: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    
    imgSrc: "./Images/profile1.svg",
    img2Src: "./Images/Ratestars.svg",
    text :'Gemma Nolen, Google'
  },
  {
   
    title: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    imgSrc: "./Images/profile2.svg",
    img2Src: "./Images/Ratestars.svg",
    text :'Gemma Nolen, Google'
  },
  {
    title:  'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    
    imgSrc: "./Images/profile3.svg",
    img2Src: "./Images/Ratestars.svg",
    text :'Gemma Nolen, Google'
  }
];
export default function Clients(){
    return<>
    <h1 className='Clients-Heading'>Clients</h1>
    <div className="Clients-Cards">
        {cardDataClients.map((card, index) => (
          <Card  className='Client-Card' key={index}>
            
            <Card.Body>
              <Card.Title className='Clients-title'>{card.title}</Card.Title>
              
             
              <div className="section2card">
              <Card.Img  variant="top" className='Clients-Img' src={card.imgSrc} />
              <div className="child">
              <Card.Img  variant="top" className='Clients-Img2' src={card.img2Src} />
              <Card.Text className='Clients-text'>
                {card.text}
              </Card.Text> 
              </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <hr></hr>
    </>
}