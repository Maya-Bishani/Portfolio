import './Hero.css'
export default function Hero(){
    return<>
 <div className="Hero">
    <div className="MB-Hero-Section1">
       <p className='MB_Paragraph1'>Branding | Image making </p>
       <p className='MB_Paragraph2'>My awesome portfolio</p>
       <p className='MB_Paragraph3' >And I made it myself! Yes. In Figma with Anima</p>
    </div>
    <div className="MB-Hero-Section2">
        <img className='MB-Hero-img img-fluid' src='./Images/hero.svg'  alt='hero-photo'/>
    </div>
 </div>
 
    </>
}