let products = [
    {
        title : "Iphone 13promax",
        comapany:"apple"
    },
    {
        title:"Galaxy",
        comapany:"Samsung"
    },
    {
        title : "Iphone 8",
        comapany:"apple"
    },
    {
        title:"nokia t120",
        comapany:"Nokia"
    },
    {
        title : "Iphone 7",
        comapany:"apple"
    },
    {
        title:"sony T110",
        comapany:"Sony"
    },
    {
        title : "Iphone 8",
        comapany:"apple"
    },
    {
        title:"Galaxy s23",
        comapany:"Samsung"
    },
    {
        title : "nokia g66",
        comapany:"Nokia"
    },
    {
        title:"nokia t120",
        comapany:"Nokia"
    },
    {
        title : "Iphone 7",
        comapany:"apple"
    },
    {
        title:"sony T120",
        comapany:"Sony"
    }
]

// get unique arr
function getUnique(arr){
    let tempArr = arr.map(item => item.comapany);
    return  [...new Set(tempArr)];
}

console.log(getUnique(products));