export const get = url => 
    new Promise(
        (resolve, reject) => {
            fetch(url)
                .then( res => res.json() )
                .then( json => resolve(json) )
        }
    )