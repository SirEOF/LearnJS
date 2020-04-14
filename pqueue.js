/* Priority Queue*/

var pq = function(){
    collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }

    this.dequeue = function(){
        collection.shift();
    }

    this.enqueue = function(value){

        if(this.isEmpty){
            collection.push(value);
        }
        else{
            var added = false;
            for(var i = 0 ; i < collection.length ; i++){
                if(value[1] < collection[i][1]){
                    collection.splice(i,0,value);
                    break;
                }
            }
            if(!added){
                collection.push(value)
            }
        }
    }
}


q1 = new pq();

q1.enqueue(['B', 4]);
q1.enqueue(['C', 3]);
q1.enqueue(['A', 1]);
q1.enqueue(['D', 12]);
q1.dequeue();
q1.print();
