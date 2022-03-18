import React, { useState, useEffect } from 'react';
import { getDoctorById } from '../service/doctorService';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null)
  const { id: doctorId } = useParams()
  
  useEffect(() => {
    setDoctor(getDoctorById(doctorId))
  }, []);

  return (
    <div>
      {
        doctor ?
          <div className="bg-gray-800 rounded-lg w-96 h-96 flex flex-col items-center justify-center">
            <div className="uppercase text-xl text-white"> {doctor.name} </div>
            <div className="text-sm text-gray-400 "> {doctor.speciality} </div>
            <div className="font-bold text-gray-300"> {doctor.fees} </div>
          </div>
          : <div className="text-white"> Loading ... </div>
      }
    </div>
  );
}

export default DoctorProfile;