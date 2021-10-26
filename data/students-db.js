const students = [
    { text: 'Brennen', present: true, _id: 125223 },
    { text: 'Westly', present: false, _id: 127904 },
    { text: 'Fataha', present: false, _id: 139608 },
    { text: 'Qwabena', present: true, _id: 125241 },
    { text: 'Amanda', present: false, _id: 127997 },
    { text: 'Jose', present: false, _id: 139656 },
]

const find = (conditions, callback) => {
    try {
        if (!(conditions instanceof Object)) {
            throw new TypeError('Please pass in an object')
        }
        if (Object.keys(conditions).length === 0) return callback(null, students)
    } catch (error) {
        console.log(error)
        callback(error, [])
    }
}

export {
    find
}