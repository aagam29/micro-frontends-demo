const doctorList = [{
    id: 0,
    name: "John Doe",
    fees: "100$",
    speciality: "Physician"
},
{
    id: 1,
    name: "Mary Jane",
    fees: "150$",
    speciality: "ENT, Dermatologist"
}, {
    id: 2,
    name: "Jane Doe",
    fees: "200$",
    speciality: "Pulmonologist"
}]

export const getDoctors = () => {
    return doctorList
}