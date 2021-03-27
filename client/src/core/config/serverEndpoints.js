let getBackendPort = () =>{
    if(process.env.NODE_ENV === "production") return "http://localhost:3001"
    else return "http://localhost:3200"
}

export default getBackendPort;