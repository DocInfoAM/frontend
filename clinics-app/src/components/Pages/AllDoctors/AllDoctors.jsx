import GetData from "./GetData/GetData";

const AllDoctors = (props) => {
  return (
    <div>
      <h2>All Doctors</h2>
      <GetData doctors={props.doctors} />
    </div>
  );
};

export default AllDoctors;
