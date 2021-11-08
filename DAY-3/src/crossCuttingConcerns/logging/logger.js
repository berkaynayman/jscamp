export class BaseLogger{
    log(data){
        console.log("default loger : " + data);
    }

}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to elastic " + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to mongo " + data)
    }
}
