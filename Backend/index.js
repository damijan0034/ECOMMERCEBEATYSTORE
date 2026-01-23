import app from "./app.js";
import DBConnection from "./util/db.js";



//SERVER
const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`)
    DBConnection();
})