/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);

    for(let i=2; i<coordinates.length; i++){
        const sl = (coordinates[i][1] -  coordinates[i-1][1])/(coordinates[i][0] -  coordinates[i-1][0])

        if(Math.abs(sl) === Infinity && Math.abs(slope) === Math.abs(sl)){
            continue
        }else if(slope !== sl){
            return false
        }
    }

    return true

};