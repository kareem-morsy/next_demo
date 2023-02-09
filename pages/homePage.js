import React from 'react'
import axios from 'axios';
function homePage(props) {
    console(props)

   
  return (
    <div>homePage</div>
  )
}

export default homePage


export async function getServerSideProps(){
    const res = await axios.get('https://reservation-system.sabeelan.com/reservation-system/api/en/banks', {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
        
    })

    const data = await res.json()
    return{
        props : {
            banks : data
        }
    }
}