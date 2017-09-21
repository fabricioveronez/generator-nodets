import { MongoClient, Db } from 'mongodb';

export class MongoRepo {
        
    static async openConnection(): Promise<Db> {
        let con:Db  = await MongoClient.connect('mongodb://fabricioveronez:bug#1979@ds023523.mlab.com:23523/produtores')
        return con;
    }
}