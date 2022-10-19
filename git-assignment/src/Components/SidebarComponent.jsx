import './css/SidebarComponent.css';

function SidebarComponent(props){
    return(
        <div className='Sidebar'>
            <h2 className='Sidebar-name'>{props.listname}</h2>
         <div className='Sidebar-list'>
             {props.contentlist.map((element)=><p className='Sidebar-list-elements'>{element}</p>
             )}
         </div>
        </div>
    );
}
export default SidebarComponent;