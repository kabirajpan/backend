import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.db.js';
import userRoutes from './routes/user.routes.js'; // Ensure this file exists

dotenv.config({
    path: './.env'
});

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB()
    .then(() => {
        // Define API routes
        app.use('/api/v1/users', userRoutes);

        // Start the server
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`✅ Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MONGO DB connection failed:", err);
    });

export default app;
