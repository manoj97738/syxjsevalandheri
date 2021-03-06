class DBWrapper {
    constructor(app) {
        this.app=app;
    }
    find(model,query,selector){
        return new Promise((resolve,reject)=>{
            model.find(query, function(err, data) {
                if(!err){
                    return resolve(data)
                }
                return reject(err)
            });
        })
    
    }
}
module.exports=new DBWrapper();