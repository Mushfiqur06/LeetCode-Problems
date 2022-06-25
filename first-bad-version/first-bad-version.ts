/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let start = 1;
        let end = n;
        let prevVersion = 1;
        
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            if(isBadVersion(mid)){
                end = mid - 1;
                prevVersion = mid;
            }else{
                start = mid + 1;
            }
        }
        return prevVersion
    };
};