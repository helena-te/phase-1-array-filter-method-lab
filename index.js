// Code your solution here
// const findMatching = filter(names, function (string) {
//     return string === names;
// });

// function findMatching(names, string) { 
//     const filter = filter(check); 
//     function check(string,names) {
//         string === names};
// };


function findMatching(names,string) {
   return names.filter(function (name) {
    return string.toUpperCase() === name.toUpperCase();
  })
};

function fuzzyMatch(names, string) {
  return names.filter(function (name) {
    return string.charAt(0) === name.charAt(0);
  })
};


function matchName(objects, string) {
  return objects.filter(function (object) {
    return object['name'] === string;
  })
};
