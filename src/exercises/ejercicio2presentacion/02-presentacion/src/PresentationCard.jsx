import imagenAvatar from './assets/avatar.jpeg';
import './PresentationCard.css';

function PresentationCard(){
    let name = 'Alessandro';
    return(
        <div className='presentation-card'>
        <img src={imagenAvatar} alt="" />
         <h1>Hola soy {name} y estoy aprendiendo React</h1>
        </div>

    
    )
}

export default PresentationCard;