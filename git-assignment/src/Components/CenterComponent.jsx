import './css/CenterComponent.css';
import MainComponent from './MainComponent';
import SidebarComponent from './SidebarComponent';



function CenterComponent(props){
    return(
        <div className="center">
          <div className="center-main">
           <MainComponent name={props.name} /> 
          </div>
          <div className="center-sidebar">
          <SidebarComponent listname={props.listname}  contentlist={props.contentlist}/> 
          </div>
        </div>
    );

}
export default CenterComponent;