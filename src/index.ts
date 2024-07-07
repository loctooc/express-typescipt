import express from 'express';
import sequelize from './config/database'
import userRoutes from './routes/userRoute';

const app = express();
const PORT = process.env.PORT || 3000;
import 'dotenv/config';

app.use(express.json());
app.use(userRoutes);

sequelize.sync().then(() => {
  console.log('Database connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
