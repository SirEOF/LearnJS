/* Array operation*/
const companies = [
    {name: 'Company one', category:'Finance' ,start: '1981', end : '2003'},
    {name: 'Company two', category:'Retail' ,start: '1992', end : '2008'},
    {name: 'Company three', category:'Auto' ,start: '1999', end : '2007'},
    {name: 'Company four', category:'Retail' ,start: '1989', end : '2010'},
    {name: 'Company five', category:'Technology' ,start: '2009', end : '2014'},
    {name: 'Company six', category:'Finance' ,start: '1987', end : '2010'},
    {name: 'Company seven', category:'Auto' ,start: '1986', end : '1996'},
    {name: 'Company eight', category:'Technology' ,start: '2011', end : '2016'},
    {name: 'Company nine', category:'Reatail' ,start: '1981', end : '1989'}
]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//forEach
companies.forEach(function(company){
    console.log(company.name);
})

/* Filter */
const newarray = ages.filter(function(i){
    return (i >= 21);
});
console.log(newarray)

// filter shorthand version
const arr2 = ages.filter(age => age >-21)
console.log(arr2)

const retail = companies.filter(val => val.category == 'Retail');
console.log(retail);

const lasted = companies.filter(val => (val.end - val.start >= 10));
console.log(lasted);

/* Map */

// 1 create array of company names
const names = companies.map(val => val.name);
console.log(names)

const year = companies.map(function(value){
    return `${value.name} [${value.start} - ${value.end}]`
})
console.log(year);

const years = companies.map( val => `${val.name} [${val.start} - ${val.end}]`)
console.log(years);

const agesS = ages.map(val => Math.sqrt(val));
console.log(agesS)


/* Sort */

/* Reduce */

const agesum = ages.reduce(function(total, age){
    return total + age;
},0);

console.log(agesum)