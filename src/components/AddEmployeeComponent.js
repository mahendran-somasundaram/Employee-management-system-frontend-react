import React, { useEffect, useState } from 'react'
import postobj from '../service/Postservice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Obj from '../service/employeeservice';



function AddEmployeeComponent() {
    const[firstname,setfirstname] = useState('');
    const[lastname,setlastname] = useState('');
    const[email,setemail] = useState('');
    const navigate= useNavigate();
    const {id} = useParams();
    const saveorUpdateEmployee = (e)=>{
        e.preventDefault();
         const ee = {firstname,lastname,email}
         if(id){
            Obj.updateEmployee(id,ee).then((response)=>{
                navigate('/employees')

            }).catch(error=>console.log(error))

         }else{

         
         postobj.createpost(ee).then((response)=>{
            console.log(response.data);
            navigate('/employees')
         }).catch(console.error());}
        
    }
    // useEffect(()=>{
    //     Obj.getEmployeeById(id).then((response=>{
    //         setfirstname(response.data.firstname)
    //         setlastname(response.data.lastname)
    //         setemail(response.data.email)
    //     })).catch(error=>
    //         console.log(error))
    
    //      },[id])
    useEffect(() => {
        if (id) {
          // Fetch employee details for update
          Obj.getEmployeeById(id)
            .then((response) => {
              setfirstname(response.data.firstname);
              setlastname(response.data.lastname);
              setemail(response.data.email);
            })
            .catch((error) => console.log(error));
        }
      }, [id]);
    
 const title= ()=> {
    if(id){
      return<h2 className='text-center'>Update Employee</h2>
         }
         else{
            return <h2 className='text-center'>Add Employee</h2>
         }

   }
    // const mmm=(e)=>{
    //     e.preventDefault();
    //     try {
    //         console.log('hcgghfhgf');
    //     } catch (error) {
    //         console.log(error)
            
    //     }
       
    // }
    
    
    return (
        <div>
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body '>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>FirstName:
                                    <input
                                     type='text'
                                     placeholder='Enter first name'
                                     name='firstname'
                                     className='form-control'
                                     value={firstname} 
                                     onChange={(e)=> setfirstname(e.target.value)}
                                    ></input></label>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>LastName:
                                    <input
                                     type='text'
                                     placeholder='Enter Last name'
                                     name='lastname'
                                     className='form-control'
                                     value={lastname} 
                                     onChange={(e)=> setlastname(e.target.value)}
                                    ></input></label>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email Id:
                                    <input
                                     type='text'
                                     placeholder='Enter Email Id'
                                     name='Email Id'
                                     className='form-control'
                                     value={email} 
                                     onChange={(e)=> setemail(e.target.value)}
                                    ></input></label>
                                </div>
                                <button className='btn btn-success' onClick={(e)=> saveorUpdateEmployee(e)}>Submitt</button>
                                <Link to={'/employees'} className='btn btn-danger'>Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent
