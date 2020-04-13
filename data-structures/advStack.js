var Stack = function(){

    this.tos = 0;
    this.content = {};

    this.push = function(value){
        this.content[this.tos] = value;
        this.tos++;
    }

    this.pop = function(){
        if(this.tos == 0){
            return undefined;
        }else{
            let result = this.content[this.tos];
            delete this.content[this.tos];
            this.tos--;
            return result;
        }
    }

    this.seek = function(){
        if(this.tos == 0){
            return undefined;
        }else{
            return this.content[this.tos];
        }
    }
}

s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);
s1.push(50);

console.log(s1.pop());
console.log(s1.pop());
console.log(s1.seek());
console.log(s1.pop());