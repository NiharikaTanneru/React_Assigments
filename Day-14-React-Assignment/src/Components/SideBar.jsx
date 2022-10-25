import React from 'react'
import { Nav } from 'react-bootstrap';


export default function SideBar() {
  return (
    <div>
      <Nav>
        <Nav.Link href='/add-emp'> AddEmployee</Nav.Link>
        <Nav.Link href='/view-emp'>ViewEmployee</Nav.Link>
        <Nav.Link href='/delete-emp'> DeleteEmployee</Nav.Link>
        <Nav.Link href='/search-emp'> SearchEmployee</Nav.Link>
      </Nav>
    </div>
  )
}