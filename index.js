import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import UserRoutes from './routes/UserRoutes.js';
import AuthRoutes from './routes/AuthRoutes.js';
import { sequelize } from './database/index.js';
// import { Role } from './models/RoleModel.js';
// import { Permission } from './models/PermissionModel.js';
// import { RolePermission } from './models/RolePermissionModel.js';

const app = express();
const PORT = 3000;

// sequelize.sync({ force: true })
// .then(() => {
//     console.log('ALL MODELS ARE SYNCED');
// })
// .catch((err) => {
//     console.error('ERROR SYNCING THE MODELS:', err);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}));

app.get('/', (req, res) => {
    res.send('API IS WORKING!')
})
app.get('/db',async (req, res) => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
  res.send('DATABASE CONNECTION IS WORKING!');
});

app.use('/api/auth', AuthRoutes);
app.use('/api', UserRoutes);

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON http://localhost:3000`)
})