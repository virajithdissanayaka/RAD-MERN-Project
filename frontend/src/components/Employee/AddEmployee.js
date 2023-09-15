import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import FormTable from "./FormTable";

export default function AddEmployee() {
  const [addSection, setAddSection] = useState(false)

  const [editSection, setEditSection] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  })
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: ""
  })

  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("/employees/create", formData)
    console.log(data)
    if (data.data.success) {
      setAddSection(false)
      getFetchData()
      setFormData({
        name: "",
        email: "",
        mobile: ""
      })
      //alert(data.data.message)
    }
  }
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

  const handleDelete = async (id) => {
    const data = await axios.delete("/employees/delete/" + id)
    //const data =  await axios.delete("/delete/:id")
    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/employees/update", formDataEdit)
    if (data.data.success) {
      setEditSection(false)
      getFetchData()
      // alert(data.data.message)
    }
  }
  const handleEditOnChange = async (e) => {
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleEdit = (el) => {
    setFormDataEdit(el)
    setEditSection(true)
  }
  return (
    <div className='container'>
      <h2 className="salesagentheader">Our Sales Agents</h2>
      <button className='btn btn-add' onClick={() => setAddSection(true)}>Add</button>

      {
        addSection && (
          <FormTable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )
      }
      {
        editSection && (
          <FormTable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )
      }
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th></th>
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
                    <td>
                      <button className='btn btn-edit' onClick={() => handleEdit(el)}>Edit</button>
                      <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
                    </td>
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
