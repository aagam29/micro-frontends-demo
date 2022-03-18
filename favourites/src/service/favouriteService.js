import { BehaviorSubject } from "rxjs";
export const favouriteList = new BehaviorSubject([])

export const addToFavourites = (favourite) => {
    const alreadyAdded = favouriteList.value.find(item => item.id === favourite.id)
    if(!alreadyAdded)
        favouriteList.next([...favouriteList.value, favourite])
}

export const removeFromFavourites = (favourite) => {
    const filteredList = favouriteList.value.filter(item => item.id !== favourite.id)
    favouriteList.next(filteredList)
}

export const resetFavourites = () => {
    favouriteList.next([])
}