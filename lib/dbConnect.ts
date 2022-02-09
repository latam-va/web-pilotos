import mongoose from "mongoose";

if(!process.env.MONGODB_URI) {
    throw new Error('Por favor defina un URL de conexion a la base de datos')
}

export const dbConnect = async () => {
    await mongoose.connect(process.env.MONGODB_URI!).then((mongoose) => {
        return mongoose
    })
}