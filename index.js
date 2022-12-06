function myEach(collection, callback) {
    let newCollect = [];
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    for (let i = 0; i < newCollect.length; i++) {
        callback(newCollect[i])
    }
    return collection;

}

function myMap(collection, callback) {
    let newCollect = [];
    let newArray = [];
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    for (let i = 0; i < newCollect.length; i++) {
        newArray.push(callback(newCollect[i]))
    }
    return newArray;

}

function myReduce(collection, callback, acc) {
    let newCollect = [];
    let num;
    let val = 0;
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    if (!acc) {
        acc = newCollect[0]
        for (let i = 1; i < newCollect.length; i++) {
            val = val + newCollect[i]
            num = callback(acc, val, newCollect)
        }
    }
    else {
        for (let i = 0; i < newCollect.length; i++) {
            val = val + newCollect[i]
            num = callback(acc, val, newCollect)
        }

    }
    return num
}

function myFind(collection, predicate) {
    let newCollect = [];
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    for (let i = 0; i < newCollect.length; i++) {
        if (predicate(newCollect[i])) {
            return newCollect[i]
        }
    }
}

function myFilter(collection, predicate) {
    let newCollect = [];
    let newArray = [];
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    for (let i = 0; i < newCollect.length; i++) {
        if (predicate(newCollect[i])) {
            newArray.push(newCollect[i])
        }
    }
    return newArray;
}

function mySize(collection) {
    let newCollect = [];
    if (typeof collection === 'object') {
        newCollect = Object.values(collection)
    }
    else {
        newCollect = collection;
    }

    return newCollect.length;
}


function myFirst(array, n = 1) {
    let newArray = []

    if (n === 1) {
        return array[0]
    }
    else {
        for (let i = 0; i < n; i++) {
            newArray.push(array[i])
        }
        return newArray
    }
}

function myLast(array, n = -1) {
    let elem;
    if (n === -1) {
        elem = array[array.length - 1]
        return elem;
    }
    else {
        for (let i = 0; i < n; i++) {
            array.shift();
            return array;
        }
    }
}

function myKeys(object){
    let keyArray = []
    keyArray = Object.keys(object)
    return keyArray
}

function myValues(object){
    let valArray = []
    valArray = Object.values(object)
    return valArray
}