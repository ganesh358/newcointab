import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

export default function Home(){
  
    const [data,setData] = useState([])
 
    const handlefetch = () => {
        if(data.length > 0){
            alert("Data is already exist")
        }else{

        
          
        axios.get(`https://api.randomuser.me/?results=60`)
        .then((res) => {
           setData(res.data.results)
           
        })
        .catch((err)=> {
            console.log(err)
        })
      } 
    }

    if(data.length > 0){
        const datapost = () => {
            console.log("DAta",data)
            const payload = {
                data
            }
        
            fetch("https://backendapi0554.onrender.com/userdata/user",{
                method : "POST",
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload)
            })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
     
        }

        datapost()
    }

    const handleDelete = () => {
        alert("Deleting Data")
        fetch("https://backendapi0554.onrender.com/userdata/delete",{
            method : "DELETE",
            headers : {
                'Content-Type': 'application/json'
            },
            body : ""
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    
    

    return (

        <Flex gap='2rem' h='30rem' justifyContent='center'  alignItems='center'>
       
            <Button _hover='none' bgColor='green' onClick={handlefetch}>Fetch Users</Button>
      
     

            <Button _hover='none' bgColor='red' onClick={handleDelete}>Delete Users</Button>
   

            <Link to='/user'>
            <Button _hover='none' bgColor='yellow'>User Details</Button>
            </Link>
        </Flex>
    )
}