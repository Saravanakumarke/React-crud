import React,{useState,useEffect} from 'react'
import { Button,  Form,Card } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom';

export default function Update() {

const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [ID,setID] = useState(null);
let history = useHistory();

useEffect(() => {
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setID(localStorage.getItem('ID'))
} ,[])

const sendDatatoApi = () =>
{
axios.put(`https://60d02d457de0b20017107d5b.mockapi.io/Crud/${ID}`, {
    firstName,
    lastName
}).then(() =>
{
    history.push('/');
    NotificationManager.success('Updated Success');
})

}
    return (
        <div>
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
  
    
    <Button type='submit' onClick={sendDatatoApi} style={{marginLeft:35}} color='green'>Update</Button>
   <Link to='/'><Button type='submit' color='red'>Cancel</Button></Link>
  </Form>
  </Card>
  <NotificationContainer/>
        </div>
    )
}
