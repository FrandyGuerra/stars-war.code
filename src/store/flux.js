//Se define una funcion que se pasa como parametro un objeto con tres funciones
//getStore te devuelve el objeto store
//getActions te devuelve el objetos con todas las acciones

//setStore modifica el store similiar al setState local
const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            //definir todas las variables que quieras hacer globales
            favoritos: [],
            contadorFavoritos: 0,
        },
        actions: {
            //Definir todas las funciones globales aqui puede ser una peticion fetch
            agregarFavorito: (name) => {
                setStore({
                    favoritos: getStore().favoritos.concat(name)
                })

                setStore({
                    contadorFavoritos: getStore().contadorFavoritos + 1
                })

            },
            eliminarFavorito: (eliminado) => {
                setStore({
                    favoritos: getStore().favoritos.filter(favorito => favorito !== eliminado)
                })
                setStore({
                    contadorFavoritos: getStore().contadorFavoritos - 1
                })
            },
        },

    }
}


export default getState;