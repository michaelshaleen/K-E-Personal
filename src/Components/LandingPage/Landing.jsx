import './Landing.css';
import Button from '../Button/Button';
function Landing() {


  return(<>

  <div className="hero-container">
      <video src="/stretch.mp4" autoPlay loop muted style={{width:"100%"}}/>
      {/* <img src="self.jpg" />  */}
           <h1>Let's achieve something</h1>
      <div className="hero-btns">
        <Button 
          className="btns" 
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >Let's connect
         </Button>
       
      </div>
    </div>
  
  
  </>)
}

export default Landing;