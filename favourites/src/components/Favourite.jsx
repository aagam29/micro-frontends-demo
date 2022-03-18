import React, { useState, useEffect } from 'react';
import { favouriteList } from '../service/favouriteService'
const Favourite = () => {
    const [favourites, setFavourites] = useState([]);
    const [showFavourites, setShowFavourites] = useState(false);

    useEffect(() => {
        return favouriteList.subscribe(list => setFavourites(list))
    }, [])

    return (
        <div>
            <div onClick={() => setShowFavourites(!showFavourites)}
                className="bg-gray-900 text-white text-xs shadow-sm flex cursor-pointer"
            >
                <span className="mr-2">
                    My Favourites
                </span>
                {
                    favourites.length ?
                        <div className="w-4 h-4 rounded-full flex bg-white text-gray-900 font-bold justify-center items-center">
                            {favourites.length}
                        </div> : null
                }
            </div>
            {
                showFavourites ?
                    favourites.map((doctor) =>
                        <div key={doctor.id}>
                            {doctor.name}
                            {doctor.fees}
                            {doctor.speciality}
                        </div>
                    )
                    : null
            }
        </div>
    );
}
export default Favourite;