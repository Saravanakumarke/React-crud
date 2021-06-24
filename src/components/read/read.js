import React,{useEffect ,useState} from 'react'
import {  Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Read() {


const [apiDate,setApiDate] = useState([])

    useEffect(() => {
       axios.get('https://60d02d457de0b20017107d5b.mockapi.io/Crud')
       .then((getData) =>
       {
        setApiDate(getData.data)
       })
    })

const setID = (id,first,last) =>
{
    console.log(id)
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', first)
    localStorage.setItem('lastName', last)
}

const getData = () =>
{
    axios.get('https://60d02d457de0b20017107d5b.mockapi.io/Crud')
       .then((getData) =>
       {
        setApiDate(getData.data)
       })
       NotificationManager.success('Deleted Success');

}

const Deletedata = (id) =>
{
    console.log(id)
  axios.delete(`https://60d02d457de0b20017107d5b.mockapi.io/Crud/${id}`)
  .then(() =>
  {
    getData();
  })

}

    return (
        <div>
        <Link to = '/create' >  <Button color='blue'>ADD NEW</Button>   </Link> 
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiDate.map((x) =>
        {
            return(
                <Table.Row>
                <Table.Cell>{x.id}</Table.Cell>
                <Table.Cell>{x.firstName}</Table.Cell>
                <Table.Cell>{x.lastName}</Table.Cell>
                <Table.Cell><Link to = '/update'><Button color="green" onClick={() =>setID(x.id,x.firstName,x.lastName)}>update</Button></Link></Table.Cell>
                <Table.Cell><Button color="red" onClick={() =>Deletedata(x.id)}>Delete</Button></Table.Cell>
              </Table.Row>
            )
        })}
      
    </Table.Body>
  </Table>
  <NotificationContainer/>
        </div>
    )
}
