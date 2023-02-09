import { Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function Page2(){

    const [data,setData] = useState([])
 
    const handlefetch = () => {
       
          
        axios.get(`https://backendapi0554.onrender.com/userdata/user`)
        .then((res) => {
           setData(res.data[0].userdataf.data)
           console.log(res.data[0].userdataf.data)
        })
        .catch((err)=> {
            console.log(err)
        })
      } 

      useEffect(()=>{
        handlefetch()
      })
      

      
     
    return (
        <SimpleGrid p='2rem'>
              <TableContainer>
                <Table size='sm'>
                    <Thead >
                    <Tr    >
                        <Th>Image</Th>
                        <Th>Name</Th>
                        <Th>Age</Th>
                        <Th>DOB</Th>
                        <Th>Gender</Th>
                        <Th>Email</Th>
                        <Th>Phone No</Th>
                        <Th>Cell No</Th>
                        <Th>Country</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
            {
               data && data.map((item) => {
                return (
                    // <Text>{item.name.first}</Text>
                    <Tr>
                        <Td><Img src={item.picture.medium}/></Td>
                        <Td display='flex' gap='.5rem' justifyContent='center' alignItems='center' h='4.1rem'><Text>{item.name.title}</Text><Text>{item.name.first}</Text><Text>{item.name.last}</Text></Td>
                       <Td>{item.dob.age}</Td>
                       <Td>{item.dob.date}</Td>
                       <Td>{item.gender}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.phone}</Td>
                        <Td>{item.cell}</Td>
                        <Td>{item.location.country}</Td>

                    </Tr>
                    
                )
               })
            
            }
            </Tbody>
                    
                    </Table>
                    </TableContainer>
        </SimpleGrid>
    )
}