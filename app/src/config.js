const config ={
    token :'token',
    headers: () =>{
        return{
            headers:{
                'Authorization': 'Bearer' + localStorage.getItem('token')
            }
        }
    }
}

export default config