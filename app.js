const _ = require('lodash');
const item= [1, [2, [2,4]]]
const newitem= _.flattenDeep(item)

console.log(newitem)