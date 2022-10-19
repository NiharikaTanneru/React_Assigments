import './css/TableComponent.css';

function TableComponent(){
     
    var books = [
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
       }];
        
    return(
       <div className='container'>
         <h3>Table using Functional Component</h3>
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
                        books.map((Element)=>
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


    );
}

export default TableComponent;