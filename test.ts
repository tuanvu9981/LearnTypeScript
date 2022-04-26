import { isRightTriangle, assert } from "./main";



let result1 = isRightTriangle(3, 4, 5);
assert(result1,true);

let result2 = isRightTriangle(5, 6, 7);
assert(result2,false);

let result3 = isRightTriangle(5, 12, 13);
assert(result3,true);

let result4 = isRightTriangle(10, 11, 12);
assert(result4,true);