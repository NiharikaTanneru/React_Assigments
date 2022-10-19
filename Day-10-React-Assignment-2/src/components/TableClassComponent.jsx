import './css/TableComponent.css';
import React from 'react';

class TableClassComponent extends React.Component{

    constructor(){
        super();
        this.state={
                 books: [
                {
                Id:"B-001",
                Name:"A",
                Author:"anitkar",
                Publication:"World-pub"
               },
               {
                Id:"B-002",
                Name:"A",
                Author:"anitkar",
                Publication:"World-pub"
               },
               {
                Id:"B-003",
                Name:"A",
                Author:"anitkar",
                Publication:"World-pub"
               },
               {
                Id:"B-004",
                Name:"A",
                Author:"anitkar",
                Publication:"World-pub"
               }]
        }
    }

    render(){

        return(

<div className='container'>
         <h3>Table using Class Component</h3>
             <table className='Table-name'>
                 <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Publication</th>
                    </tr>

                 </thead>
                       <tbody>
                        {
                       this.state.books.map((Element)=>
                        <tr>
                            <td>{Element.Id}</td>
                            <td>{Element.Name}</td>
                            <td>{Element.Author}</td>
                            <td>{Element.Publication}</td>
                          </tr>
                            )
                        }
                       </tbody>
             </table>


       </div>

        )  }

}
export default TableClassComponent;