import React, { useEffect, useState } from 'react'
import obj from '../service/employeeservice';
import { Link } from 'react-router-dom';


function ListEmployeecomponents() {

    const [employee, setemployee] = useState([])
    useEffect(()=>{
        
            getAllemp();
         },[])
        const getAllemp = ()=>{
            obj.getAllEmployees().then((response)=>{
                setemployee(response.data)
                console.log(response.data)
    
            }).catch(error=> {
                console.error();})
    

        }

         const deleteEmployee = (employeeId)=>{
            obj.deleteEmployee(employeeId).then((response=>{
                getAllemp();

            })).catch((error)=>console.log(error));
         } 


    return (
        <div className="container">
            <br/> <br/>
            <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee </Link>
            <h2 className="text-center">List Employees</h2>
            
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id </th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        employee.map(
                            employee =>
                            <tr key={employee.id}>
                                
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link className='btn btn-info'to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className='btn btn-danger'onClick={()=> deleteEmployee(employee.id)}
                                     style={{marginLeft:"10px"}}>Delete</button>
                                </td>
                            </tr>


                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListEmployeecomponents
