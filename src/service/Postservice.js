
import axios from 'axios';

const apiurl="http://localhost:8080/api/v1/employees"

class Postservice{
    createpost(ee){
        return axios.post(apiurl,ee);
    }
}

const postobj = new Postservice();

export default postobj;
