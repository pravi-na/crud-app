import { useState } from 'react'
import './index.css'
import Forms from './Forms'
import Table from './Table'
function App() {
  const initialData = {"name":"","email":""};
  const [formData,setFormData] = useState(initialData);
  const [tableData,setTableData] = useState([]);
  const [editidx,seteditidx] =useState(null)
  const handleFormDataChange = (key,value) =>{
    setFormData ({
    ...formData, [key]:value
  }) 
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editidx === null){
      setTableData([...tableData, formData]);
    setFormData(initialData)
    }
    else{
      tableData[editidx]=formData;
      setFormData(initialData);
      setTableData(tableData)
      seteditidx(null)
    }
  }
  
  const handleEdit = (idx) =>{
    console.log(idx,tableData[idx]);
    setFormData(tableData[idx]);
    seteditidx(idx)
  }

  const handleDelete = (idx) =>{
    tableData.splice(idx,1);
    setTableData([...tableData]);
    console.log(tableData)
  }
  
  return (
    <>
    <Forms handleFormDataChange = {handleFormDataChange} handleSubmit={handleSubmit} formData={formData} editidx={editidx} />
    <Table tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </>
  )
}

export default App
