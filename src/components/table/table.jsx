



import React from 'react'

function TableComponent({rowData=[]}) {
  return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>


      {
        rowData.map(eachRow=>{
            return(
                <tr>
        <td>{eachRow.model}</td>
        <td>{eachRow.mobileNumber}</td>
        <td>{eachRow.state}</td>
      </tr>

            )
        })
      }
     
    </tbody>
  </table>
  
  )
}

export default TableComponent