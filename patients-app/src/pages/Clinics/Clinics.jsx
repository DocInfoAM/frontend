const getClinics = async () => {
   const res = await fetch(
     "https://mock-server-docinfo.onrender.com/clinics"
    );
  return await res.json();
  };
  
   const clinicList = await getClinics()

const getClinicReviews = async () => {
  const res = await fetch(
    "https://mock-server-docinfo.onrender.com/clinicsreviews"
    );
  return await res.json();
  };
   
  const reviewList = await getClinicReviews()

console.log(clinicList)
console.log(reviewList)

const Clinics = () => {
    return (
        <>
        <p>результаты поиска:</p>
    {
            clinicList.map((clinic)=> {
                return (<>
                    <div>Номер клиники: {clinic.id} </div>
                    <div>Название клиники: {clinic.clinicName}</div>
                    <div>Описание клиники: {clinic.clinicInformation}</div>
                    <div>Адрес: <br />Город: {clinic.clinicAddress.textAddress.city}, Улица: {clinic.clinicAddress.textAddress.street}, Дом: {clinic.clinicAddress.textAddress.building}, Этаж: {clinic.clinicAddress.textAddress.floor}<br /> Координаты: {clinic.clinicAddress.coordinates}</div>
                    <div>Номера телефонов: {clinic.clinicPhones}</div>
                    <div>Рейтинг: {clinic.clinicRate}</div>
                    <div>Соцсети: {clinic.clinicSocialNetworks.join(' ')}</div>
                    <div>Минимальная стоимость за услугу: {clinic.minimalPrice}</div>
                    <div>Услуги: {clinic.clinicServices.map((services)=> {return(<><br/>{services.service} {services.price}</>)})}</div>
                    <div>Тэги: {clinic.clinicTags}</div>
                    <div>Отзывы: {reviewList.filter((review)=> (clinic.id === review.clinic_id)).map((review)=>{
                      return(<>{review.reviews.map((currentReview)=>{return(<><br />{currentReview.patient_id} <br />{currentReview.phone_number} <br />Дата Обзора: {currentReview.date_of_review} <br />Дата посещения: {currentReview.date_of_visit} <br />Рейтинг: {currentReview.rating} <br />{currentReview.text_of_review} <br /></>)})}</>)
                    }) }</div>
              <br /> </> )
            })
    }
    </>
    )
}

export default Clinics;