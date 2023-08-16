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
            doctorList.map((doctor)=> {
                return (<>
                <div>Имя: {doctor.name}</div>
                <div>Рейтинг: {doctor.rate}</div>
                <div>Специализация: {doctor.specialisation}</div>
                <div>Доп. Специализация: {doctor.additional_specialisations}</div>
                <div>Клиника: <br />
                    {doctor.clinic.name} <br />
                    Адрес: <br />{doctor.clinic.address.city}, {doctor.clinic.address.street}, Дом {doctor.clinic.address.building}, Этаж {doctor.clinic.address.floor}</div>
                <div>Доп. Услуги: <br />{doctor.additional_services.map((services)=>{return(<>{services.service}, Стоимость: {services.price} <br /></>)})}</div>
                <div>График: {doctor.workingSchedule.join(", ")}</div>
                <div>Почта: {doctor.email}</div>
                <div>Опыт: {doctor.experience}</div>
                <div>Стоимость посещения: {doctor.price_for_visit}</div>
                <div>Тэги: {doctor.disease_tags.join(", ")}</div>
                
                <br /></>)
            })

        }
        </>

    )
}

export default Doctors