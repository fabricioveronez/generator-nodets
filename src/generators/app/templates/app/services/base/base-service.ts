import { MongoRepo } from '../../repository/MongoRepo'
import { Collection, Db } from 'mongodb'
import { BaseEntity } from "../../model/base/base-entity";
import { ObjectId } from "bson";

export class BaseService<T extends BaseEntity> {

    constructor(private collectionName: string) {
    
    }

    public async Save(entidade: T): Promise<void> {   
        let db: Db = await MongoRepo.openConnection();
        await db.collection<T>(this.collectionName)
            .insertOne(entidade);
    }

    public async FindAll(): Promise<Array<T>> {
        let db: Db = await MongoRepo.openConnection();
        return await db.collection<T>(this.collectionName).find({}).toArray();
    }

    public async Update(entidade: T): Promise<void> {   
        let db: Db = await MongoRepo.openConnection();
        await db.collection<T>(this.collectionName).updateOne({ _id : entidade._id }, entidade);
    }

    public async FindID(id: string): Promise<T> {
        let db: Db = await MongoRepo.openConnection();
        return await db.collection<T>(this.collectionName).findOne({ _id : new ObjectId(id) });
    }
}