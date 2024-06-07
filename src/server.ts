import app from "./app";

const server = app.listen('3000', ()=>{
    console.log('server is running at http://127.0.0.1:3000/ ')
})

export default server