import React,{useState} from 'react'
import { Button,  Form,Card } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export default function Create() {

const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
let history = useHistory()

console.log(history.location.pathname)
console.log(firstName)
console.log(lastName)

const sendDatatoApi = () =>
{
    if(firstName==='')
    {
        NotificationManager.error('Please fill firstName ');
    }
    else
    {
       
        axios.post('https://60d02d457de0b20017107d5b.mockapi.io/Crud', {
            firstName,
            lastName
        }).then(() =>
        {
            history.push('/');
            NotificationManager.success('Success');
            
        })
       
    }


}
    return (
        <div className = "create">
            <Card >
            <Form style={{padding:20}}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' 
      name='fname'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name'
      name='lname'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      />
    </Form.Field>
  
    <Button type='submit' onClick={sendDatatoApi} style={{marginLeft:35}} color="green">Submit</Button>
   <Link to='/'><Button type='submit' color="red">Cancel</Button></Link>
  </Form>
  </Card>
  <NotificationContainer/>
        </div>
    )
}
