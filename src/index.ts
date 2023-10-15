import express from 'express';
import { createConnection } from 'typeorm';
import userRoutes from './routes/userRoutes';

const app = express();

// Connect to the database
createConnection()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
