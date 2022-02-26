import { log } from 'console';
import express from 'express';

const app = express();
const port: number = process.env.PORT || 3000;
/////////////////////////////////////////



app.listen(port, () => {
  console.log("Server on port :: ", port);
});
