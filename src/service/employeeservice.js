import axios from "axios"

const apiurl="http://localhost:8080/api/v1/employees"



class employeeservice{
    getAllEmployees(){
                 return axios.get(apiurl)
           }
           
       getEmployeeById(employeeid){
        return axios.get(apiurl +'/'+employeeid);
       }    
    updateEmployee(employeeid,employee){
        return axios.put(apiurl+'/'+employeeid,employee);
    }
     deleteEmployee(employeeid){
        return axios.delete(apiurl+'/'+employeeid);
    }

        
}
const Obj = new employeeservice(); 
export default Obj



// class EmployeeService{

//     getAllEmployees(){
//         return axios.get(apiurl)
//     }
// }
// 