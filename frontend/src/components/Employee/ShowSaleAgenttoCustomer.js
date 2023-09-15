import React from "react"
import axios from "axios"
import { useEffect, useState } from 'react'

export default function ShowEmployee() {
    const [dataList, setDataList] = useState([])

    const getFetchData = async (e) => {
        const data = await axios.get("/employees/")
    
          console.log(data)
          if (data.data.success) {
            setDataList(data.data.data)
          
        }
      }
      useEffect(() => {
        getFetchData()
      }, [])

      return (
        <div>
          <h1  className="salesagentheader">Our Sales Agents</h1>
          <div className='tableContainer1'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataList[0] ? (
                  dataList?.map((el,index) => {
                    return (
                      <tr key={index}>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.mobile}</td>
                      </tr>
                    )
                  }))
                  : (
                    <p style={{textAlign: "center"}}>No Data</p>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    
    
}