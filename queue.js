var Queue = function(){
    collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.enqueue = function(value){
        collection.push(value);
    }

    this.dequeue = function(){
        collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.size();
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.print();
console.log(q.isEmpty());
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
q.print();
