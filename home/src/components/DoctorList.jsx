import React, { useState, useEffect } from 'react';
import { getDoctors } from '../service/doctorService';
import { useNavigate } from 'react-router-dom';
import {
  addToFavourites,
  favouriteList,
  resetFavourites,
  removeFromFavourites
} from 'favouriteApp/service/favouriteService';

const DoctorList = () => {

  const [doctorList, setDoctorList] = useState([])
  const [favouriteDoctorIdList, setFavouriteDoctorIdList] = useState([]);

  useEffect(() => {
    setDoctorList(getDoctors())
    return favouriteList.subscribe(list => {
      const idList = list.map(item => item.id)
      setFavouriteDoctorIdList(idList)
    })
  }, []);

  const navigate = useNavigate();
  const navigateToDoctorProfile = (id) => {
    navigate(`/doctor/${id}`)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {doctorList?.length > 0 ?
        doctorList.map((doctor) => {
          return (
            <div className="w-2/5 flex flex-col my-4" key={doctor.id}>
              <div
                className="bg-gray-800 rounded-lg p-5 mb-1 cursor-pointer
                hover:shadow-lg transition-all"
                onClick={() => navigateToDoctorProfile(doctor.id)}
              >

                <div className="uppercase text-base text-white"> {doctor.name} </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-400 "> {doctor.speciality} </div>
                  <div className="font-bold text-gray-300"> {doctor.fees} </div>
                </div>

              </div>
              {
                favouriteDoctorIdList.indexOf(doctor.id) === -1 ?
                  <div className="text-white bg-green-800 text-xs px-4 py-2 rounded-lg w-36 self-end text-center cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => addToFavourites(doctor)}>
                    ADD
                  </div> :
                  <div className="text-white bg-red-800 text-xs px-4 py-2 rounded-lg w-36 self-end text-center cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => removeFromFavourites(doctor)}>
                    REMOVE
                  </div>
              }
            </div>
          )
        }) : <div> Loading... </div>
      }
      <div className="text-white bg-pink-800 text-xs mt-4 px-4 py-2 rounded-lg w-2/5 text-center cursor-pointer hover:shadow-lg transition-all"
        onClick={() => resetFavourites()}>
        RESET
      </div>
    </div>
  );
}

export default DoctorList;