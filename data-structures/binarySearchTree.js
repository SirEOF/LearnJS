/* Binary search tree  in javascript */


// Structure of a node
class Node{
    constructor(value , left = null , right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Main Binary Search tree implementation
class BST{

    constructor(){
        this.root = null;
    
    }

    // inserts node in a binary search tree
    addNode(value){
        var newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return;
        }

        else{
            function foo(node){
                // Add to left subtree
                if(value < node.value){

                    if(node.left == null){
                        node.left = new Node(value);
                    }
                    else if(node.left !== null){
                        return foo(node.left);
                    }
                }

                // Add to right subtree
                else if(value > node.value){

                    if(node.right == null){
                        node.right = new Node(value);
                    }
                    else if(node.right !== null){
                        return foo(node.right);
                    }
                }

                // Do nothing
                else{
                    return;
                }
            }

            newNode = this.root;
            return foo(newNode);
        }
    }

    // returns json format of the tree object
    allElements(){
        return JSON.stringify(this);
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left
        }
        return current.value;
    }

    // maximum element in the tree
    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.value;
    }

    // elements in ascending order
    printAscending(){
        function print(node){
            if(node.left){
                print(node.left);
            }
            console.log(node.value);
            if(node.right){
                print(node.right);
            }
        }

        print(this.root);
    }

    // elements in descending order
    printDescending(){
        function print(node){
            if(node.right){
                print(node.right);
            }
            console.log(node.value);
            if(node.left){
                print(node.left);
            }
        }

        print(this.root);
    }

    // left root right
    printInOrder(){
        this.printAscending();
    }

    // root left right
    printPreOrder(){
        function print(node){
            if(node){
                console.log(node.value);
                if(node.left) print(node.left);
                if(node.right) print(node.right);
            }
        }
        print(this.root);
    }

    // left right root
    printPostOrder(){
        console.log("//Todo");
    }

    // return true if element is present
    isPresent(value){
        function find(node){
            if(node){
                if(value == node.value){
                    return true;
                }
                else if(value < node.value){
                    return find(node.left);
                }
                else if(value > node.value){
                    return find(node.right);
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        return find(this.root);
    }

    showRoot(){
        return this.root.value;        
    }
}


b = new BST();
b.addNode(20);
b.addNode(25);
b.addNode(24);
b.addNode(23);
b.addNode(22);
b.addNode(10);
b.addNode(1);
b.addNode(19);
b.addNode(2);

console.log("Tree contents:\n----------");
console.log(b.allElements());

console.log("----------");
console.log("Ascending order of elements:");
b.printAscending();

console.log("----------");
console.log("Decending order of elements:");
b.printDescending();

console.log("----------");
console.log("In-Order traversal of elements:");
b.printInOrder();

console.log("----------");
console.log("Pre-Order traversal of elements:");
b.printPreOrder();

console.log("----------");
console.log("Post-Order traversal of elements:");
b.printPostOrder();

console.log("----------");
console.log("Is number 20 present in the tree ?\n" + b.isPresent(20));
console.log("Is number 30 present in the tree ?\n" + b.isPresent(30));
console.log("Is number 10 present in the tree ?\n" + b.isPresent(10));

console.log("----------");
console.log("The root of this tree is: " + b.showRoot());