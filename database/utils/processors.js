const processResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }
    
    resolve(results[0]);
};


const processContactResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[2]);
};

const processUpdateResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results);
};

module.exports = {
    processResults,
    processContactResults,
    processUpdateResults
};