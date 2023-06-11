const FetchSimultion = (dataBase, time) => {

    return new Promise((resolve,rejact) => {
        setTimeout(() => {
            resolve (dataBase);
            rejact(new Error ("algo salió mal"))
        }, time)
    })
    
}

export default FetchSimultion;