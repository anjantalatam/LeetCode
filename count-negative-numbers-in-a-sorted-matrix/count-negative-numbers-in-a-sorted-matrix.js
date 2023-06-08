/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let spread = []

    grid.forEach(g=>{
        spread.push(...g)
    })

    return spread.reduce((acc,cur) => cur<0 ? ++acc : acc, 0)
};