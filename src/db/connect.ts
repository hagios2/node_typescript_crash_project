import mongoose from 'mongoose'
import config from 'config'
import log from '../logger'


function connect()
{

    const url = 'mongodb+srv://oteng:toor8853@cluster0.pfczz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // const url = 'mongodb+srv://oteng:toor8853@cluster0.mjhvs.mongodb.net/node_api_with_ts?retryWrites=true&w=majority' //process.env.DB_URL

    return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });


}

export default connect

// import mongoose from 'mongoose'
// import dotenv from "dotenv";
// dotenv.config({path: './config/.env'})

// const url = 'mongodb+srv://oteng:toor8853@cluster0.mjhvs.mongodb.net/node_api_with_ts?retryWrites=true&w=majority' //process.env.DB_URL

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true})

// const connection = mongoose.connection

// connection.once('open', () => {
//     console.log('connection with monogo established succussfully')
// })

// export default connection