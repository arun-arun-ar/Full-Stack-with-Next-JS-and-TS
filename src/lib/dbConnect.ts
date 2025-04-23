import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Database is Already Connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '');
        connection.isConnected = db.connections[0].readyState;

        if (process.env.NODE_ENV !== 'production') {
            console.log("Database Connected Successfully");
        }
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1); // or throw error;
    }
}

export default dbConnect;
