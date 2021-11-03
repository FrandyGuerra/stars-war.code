//Se define una funcion que se pasa como parametro un objeto con tres funciones
//getStore te devuelve el objeto store
//getActions te devuelve el objetos con todas las acciones
//setStore modifica el store similiar al setState local
const getState = ({getStore,getActions,setStore}) =>{
    return{
        store:{
            //definir todas las variables que quieras hacer globales
            name:'Frandy',
            lastname:'Guerra',
            products:[
                {id:1,title:'Product 1'},
                {id:2,title:'Product 2'},
                {id:3,title:'Product 3'}
            ],
            users:null,
        },
        actions:{
            //Definir todas las funciones globales aqui puede ser una peticion fetch
            getFullname: ()=>{
                const {name,lastname}=getStore();
                return `${name} ${lastname}`;
            },
            getUsers:(url)=>{
                fetch(url).then(res=>res.json()).then(data=>setStore({users:data}))
            }
        }
    }
}

export default getState;