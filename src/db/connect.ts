import mongoose from 'mongoose'
import config from 'config'
import log from '../logger'


function connect()
{
    const db_url = config.get('dburi') as string 
    
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        log.info('Database Connected')
    })
    .catch((error) => {
        log.info('Db error', error)

        process.exit(1)
    })
}

export default connect