/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let spread = []

    grid.forEach(g=>{
        spread.push(...g)
    })

    let count = 0
    spread.forEach(i=>{
        if( i < 0 ){
            count++;
        }
    })

    return count
};