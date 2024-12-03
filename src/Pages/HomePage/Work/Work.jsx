import './Work.css'
import Card from 'react-bootstrap/Card';
const cardData = [
  {
    imgSrc: "./Images/Image.svg",
    title: 'Free Bird',
    text: "Lynyrd Skynyrd"
  },
  {
    imgSrc: "./Images/Image2.svg",
    title: "Purple Haze",
    text: "Jimi Hendrix"
  },
  {
    imgSrc: "./Images/Image3.svg",
    title: "You Really Got Me",
    text: "The Kinks"
  } ,
  {
    imgSrc: "./Images/Image4.svg",
    title: "American Girl",
    text: "Tom Petty"
  } ,
  {
    imgSrc: "./Images/Image5.svg",
    title: "Whole Lotta Love",
    text: "Led Zeppelin"
  } ,
  {
    imgSrc: "./Images/Image6.svg",
    title: "Under Pressure ",
    text: "Queen"
  }
];
export default function Work(){
return<>
<h1 className='Work-Heading'>My latest work</h1>
      <div className="Work-Cards">
        {cardData.map((card, index) => (
          <Card className='Card-work' key={index}>
            <Card.Img  variant="top" className='Work-img-card' src={card.imgSrc} />
            <Card.Body>
              <Card.Title className='Work-title'>{card.title}</Card.Title>
              <Card.Text className='Work-text'>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
</>
}