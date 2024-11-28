import { useEffect, useState } from "react"
import Donor from "../Donor/Donor"




const Donors = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
      fetch('data.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
    
  return (
    

    <div className="grid md:grid-cols-3 gap-4 w-11/12 mx-auto mt-4">
      {
        datas.map(data => <Donor key={data.id} donor={data}></Donor>)
      }
    </div>
  )
}

export default Donors
