var mergeTwoLists = function(list1, list2) {
    if(!list1.length & !list2.length) return [];
    if(!list1.length & list2.length === 1) return [list2[0]]
    if(!list2.length & list1.length === 1) return [list1[0]]

    let result = list1.concat(list2).sort();
    return result;
};

console.log(mergeTwoLists([1, 1, 4], [2, 3, 4, 7]))