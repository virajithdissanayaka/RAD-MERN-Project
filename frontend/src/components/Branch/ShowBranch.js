import React from "react"
import axios from "axios"
import { useEffect, useState } from 'react'

export default function ShowBranches() {
    const [dataList, setDataList] = useState([])

    const getFetchData = async (e) => {
        const data = await axios.get("/branches/")
    
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
          <h1  className="salesagentheader">Our Branches</h1>
          <div className='tableContainer1'>
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Address</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataList[0] ? (
                  dataList?.map((el,index) => {
                    return (
                      <tr key={index}>
                        <td>{el.city}</td>
                        <td>{el.address}</td>
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