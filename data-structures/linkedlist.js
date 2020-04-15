/* Linked List in javascript */

class Node{
    constructor(data , next = null ){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    // Print Size
    printSize(){
        console.log(this.size);
    }
    
    // Print the complete list
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    
    // Insert at last
    insertLast(value){
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            this.size++;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }         
            current.next = node;
            this.size++;
        }
    }

    // Insert at beginning 
    insertFirst(value){
      this.head = new Node(value , this.head);
        this.size++;
    }
}

ll = new LinkedList();
ll.insertLast(10);
ll.insertLast(20);
ll.insertLast(30);
ll.insertLast(40);
ll.printList();
ll.printSize();