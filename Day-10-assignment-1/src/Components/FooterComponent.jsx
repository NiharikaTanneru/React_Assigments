import './css/FooterComponent.css';

 function FooterComponent(props){
    return(
      <div className='footer'>
       <p>{props.name}</p>
        </div>
    );
}

export default FooterComponent;