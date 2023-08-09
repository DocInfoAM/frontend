const getDoctors = async () => {
    const res = await fetch(
      "https://mock-server-docinfo.onrender.com/doctors"
     );
   return await res.json();
   };
   
    const doctorList = await getDoctors()
    console.log(doctorList)

const Doctors = () => {
    return (
        <>
        <p>результаты поиска:</p>
        {

        }
        </>

    )
}

export default Doctors