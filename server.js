const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const message = require('./utils/message');

dotenv.config({path: './config/config.env'});

mongoose.connect(process.env.DB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open' , () => {
    message('Connected to database.','success');
});

const app = express();
app.use(cors());

const PORT = 4000 || process.env.PORT;

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT , () => {
    message(`Running on port ${PORT}`,'success');
});