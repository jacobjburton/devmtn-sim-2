require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../public/build`));

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const port = process.env.PORT || 4000;


app.get('/api/houses', controller.getHouses);
app.post('/api/newHouse', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);


app.listen(port, () => { console.log(`Listeny McListenerson on port: ${port}`); });
