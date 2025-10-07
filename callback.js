function greet(name, callback){
    console.log("hello " + name);
    callback()
};

function bye(){
    console.log("Good bye");
};

greet("brian",bye)