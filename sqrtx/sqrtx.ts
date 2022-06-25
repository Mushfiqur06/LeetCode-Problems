function mySqrt(x:number): number{
    let start = 1;
    let end = Math.floor(Math.sqrt(x));

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(mid * mid === x){
            return mid
        }

        if(mid * mid < x){
            start = mid + 1;
        }else{
            end = mid -1
        }
    }
    return start - 1;
}