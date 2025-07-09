
export const addAlbum = (album) => {

    return{
        type: "ADD_ALBUM",
        payload: album,
    }
}


export const removeAlbum = (id) => {

    return {
        type: "REMOVE_ALBUM",
        payload: id,
    }
}