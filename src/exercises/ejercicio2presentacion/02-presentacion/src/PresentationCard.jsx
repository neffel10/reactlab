import imagenAvatar from './assets/avatar.jpeg';
import './PresentationCard.css';

function PresentationCard(){
    let name = 'Alessandro';
    return(
        <div className='presentation-card'>
        <img src={imagenAvatar} alt="" />
         <h1>I am {name} and am learning React</h1>
        </div>

    
    )
}

export default PresentationCard;