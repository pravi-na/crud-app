const Forms = ({ handleFormDataChange,handleSubmit,formData,editidx }) =>{
    return(
        <div className=" mx-auto max-w-2xl text-center">
           <h2 className=" text-2xl font-semibold pt-3">Forms and Table Example</h2>
           <form  className=" shadow-2xl p-8 m-8" onSubmit={(e)=>{e.preventDefault();handleSubmit(e)}}>
            <input type="text" placeholder="Name" value={formData.name} className=" p-2 text-xl rounded-lg border w-full m-4" onChange={(e)=>{const {value} = e.target; handleFormDataChange("name",value)}} required />
            <input type="email" placeholder="Email" value={formData.email} className="p-2 text-xl rounded-lg border w-full m-4" onChange={(e)=> {const {value} = e.target; handleFormDataChange("email",value)}} required/>
            <button type="submit" className="bg-purple-400 text-white text-xl px-8 py-2 rounded-lg">{editidx === null? `Add`:`Update`}</button>
           </form>
        </div>
    )
}

export default Forms