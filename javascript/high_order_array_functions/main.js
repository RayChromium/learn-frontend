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
// reduce

