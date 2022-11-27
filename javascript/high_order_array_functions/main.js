const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

// older than 21
// for(let i = 0 ; i < companies.length ; ++i) { 
//     console.log(companies[i]);
// }

// companies.forEach( function(company, num ,companies){
//     console.log(company);
//     console.log(num);          // prints the current iteration index
//     console.log(companies.length)
// } );

// filter

// let canDrink = [];
// for( let i = 0; i < ages.length; ++i) { 
//     if(ages[i] >= 20) {
//         canDrink.push(ages[i]);
//     }
// }


// const canDrink = ages.filter(function(age){
//     if(age >= 20) {
//         return true;
//     }
// });

// const canDrink = ages.filter( age => age >= 20 );


// console.log(canDrink);

// filter the 'Retail' companies

// const retailCompanies = companies.filter( company =>  company.category === 'Retail' );
// console.log(retailCompanies);
// console.log(companies);

// map

// create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// // chained map:
// const ageMap = ages.map(age => age * 2)
//                    .map(age => age * 3);
// console.log(ageMap);

// sort
// get a sorted companies list by start date:
// const sortedComapnies = companies.sort(function(c1, c2
//   ){
//   if( c1.start > c2.start ){
//     return 1;
//   } else {
//     return -1
//   }
// });

// const sortedComapnies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortedComapnies);

// // sort ages, mutates the original arrat
// console.log(`ages original : ${ages}`);
// const sortedAges = ages.sort((a,b) => a-b);
// console.log(`sortedAges : ${sortedAges}`);
// console.log(`ages mutated : ${ages}`);


// reduce
// sum sth up
// let ageSum = 0;
// for( let  i = 0; i < ages.length; ++i ) { 
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//   return total + age;
// },0);

const ageSum = ages.reduce((total, age) => total + age,0);

console.log(ageSum);

//get total yeas of all companies
// const companiesYears = companies.reduce(function(total, company){
//   return total + (company.end - company.start);
// }, 0);

const companiesYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(companiesYears);