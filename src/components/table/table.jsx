



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
        <td>{eachRow.data1}</td>
        <td>{eachRow.data2}</td>
        <td>{eachRow.data3}</td>
      </tr>

            )
        })
      }
     
    </tbody>
  </table>
  
  )
}

export default TableComponent