const {MongoClient} = require('mongodb');


const runOnDb = async (exec) => {
    const uri = "mongodb+srv://c8aA03oipQmJAj8Y:VWeNBOIufGvMD3JW@cluster0.cgjef.mongodb.net/bookstore?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    const execResult = await exec(client);
    await client.close();

    return execResult;
}

export const isCached = async (col: string, path: string, queries: { [key: string]: string | number | boolean }) => {
    console.log('isCached', path + JSON.stringify(queries))

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
