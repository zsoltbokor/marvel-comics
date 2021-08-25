const {MongoClient} = require('mongodb');


const runOnDb = async (exec) => {
    const {DB_USER, DB_PASSWORD} = process.env;

    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cgjef.mongodb.net/bookstore?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    const execResult = await exec(client);
    await client.close();

    return execResult;
}

export const isCached = async (col: string, path: string, queries: { [key: string]: string | number | boolean }) => {
    return await runOnDb(async (client)=>{
        return await client.db('marvel')
            .collection(col)
            .findOne({
                cacheKey: path + JSON.stringify(queries)
            })
    })
}

export const doCache = async (col: string, path: string, queries: { [key: string]: string | number | boolean },data) => {
    return await runOnDb(async (client)=>{
        const save = await client.db('marvel')
            .collection(col)
            .insertOne({
                cacheKey: path+JSON.stringify(queries),
                data
            });

        return save.insertedId;
    })
}
