class spiderman{
    constructor(name,age,actor,movies,studio){
        this.name=name
        this.age=age
        this.actor=actor
        this.movies=movies
        this.studio=studio    
    }
    getinfo(){
        return "Hey I'm "+this.actor+" from "+ this.studio
    }
    
}
module.exports=spiderman