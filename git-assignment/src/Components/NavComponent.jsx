import './css/NavComponent.css';

function NavComponent(props){

    return(
        <div className="navcomponent">
          <nav className="navbar">
         <ul>
            {props.navelements.map((elements)=><li><a href="#">{elements} </a></li> )}  

          </ul>
          </nav>
        </div>

    );
}
export default NavComponent;