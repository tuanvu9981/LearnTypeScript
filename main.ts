export function isRightTriangle(a: number, b: number, c: number): boolean { 
    if (a * a != b * b + c * c) {
        if (b * b != a * a + c * c) { 
            if (c * c != a * a + b * b) {
                console.log(`[${a}, ${b}, ${c}]: A Right Triangle \n`);
                return false;
            }
        }
    }
    console.log(`[${a}, ${b}, ${c}]: NOT A Right Triangle \n`);
    return true;
}

export function assert(res1: boolean, res2: boolean) { 
    if (res1 != res2) { 
        throw new Error("Test Result Not Matched !");
    }
}