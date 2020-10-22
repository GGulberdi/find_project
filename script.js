/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/

const streetName =["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];


let getLanes = streetName.filter(function(value){
return value.includes('Lane')})



console.log(getLanes)