import './Skills.css'
import Card from 'react-bootstrap/Card';
const cardDataSkills = [
  {
    imgSrc: "./Images/Imageplaceholder1.svg",
    title: 'Product design',
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  },
  {
    imgSrc: "./Images/Imageplaceholder2.svg",
    title: "Art direction",
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  },
  {
    imgSrc: "./Images/Imageplaceholder3.svg",
    title: "Visual design",
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  }
];

export default function Skills(){
    
    return<>
    <h1 className='Skills-Heading'>My Skills</h1>     
    <div className="Skills-Cards">
        {cardDataSkills.map((card, index) => (
          <Card className='Card-Skill' key={index}>
            <Card.Img  variant="top" className='Img-Card' src={card.imgSrc} />
            <Card.Body>
              <Card.Title className='Skills-title'>{card.title}</Card.Title>
              <Card.Text className='Skills-text'>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

   
    
    </>
}