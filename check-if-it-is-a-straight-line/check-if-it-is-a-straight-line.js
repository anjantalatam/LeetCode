/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length === 2){
        return true;
    }
    
    let store = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);

    for(let i=2; i<coordinates.length; i++){
        const [x1,y1] = coordinates[i-1]
        const [x2,y2] = coordinates[i]

        const slope = (y2 - y1)/(x2 - x1)

        if(Math.abs(slope) === Infinity && Math.abs(store) === Math.abs(slope)){
            continue
        }else if(store !== slope){
            return false
        }
    }

    return true

};