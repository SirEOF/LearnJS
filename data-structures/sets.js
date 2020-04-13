/* Set is an array of unique element*/

var Set = function()
{
    var content = [];

    this.show = function()
    {
        return content;
    }

    this.add = function(value)
    {
        if(content.indexOf(value) != -1)
        {
            return false;
        }
        else
        {
            content.push(value);
            return true;
        }
    }

    this.remove = function(value)
    {
        if(content.indexOf(value) != -1)
        {
            delete content[content.indexOf(value)];
            return true;
        }
        else
        {
            return false;
        }
    }

    this.check = function(value)
    {
        if(content.indexOf(value) != -1)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    this.union = function(second)
    {
        var unionSet = new Set();
        firstSet = this.show();
        secondSet = second.show();

        firstSet.forEach(function(e)
        {
            unionSet.add(e);
        });

        secondSet.forEach(function(e)
        {
            unionSet.add(e);
        });
        return unionSet;
    }

    this.intersection = function(second)
    {
        var interSet = new Set();
        firstSet = this.show();
        secondSet = second.show();

        firstSet.forEach(function(e)
        {
            if(!second.check(e))
            {
                interSet.add(e);
            }
        });

        return interSet;
    }

    // this.difference = function(second)
    // {
    //     var diffSet = new Set();
    //     firstSet = this.show();
    //     secondSet = second.show();

    //     firstSet.forEach(function(e)
    //     {
    //         if(second.check(e))
    //         {
    //             diffSet.add(e);
    //         }
    //     });
        
    //     return diffSet;
    // }
}


s1 = new Set();
s2 = new Set();

s1.add(1);
s1.add(2);
s1.add(3);
s2.add(4);
s2.add(5);
s2.add(3);
console.log("Set 1: " + s1.show());
console.log("Set 2: " + s2.show());
console.log("Union: " +s1.union(s2).show());
console.log("Intersection: " + s1.intersection(s2).show());
// console.log("Difference: " + s1.difference(s2).show());