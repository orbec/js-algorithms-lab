export function getValidErrorTotal(logs){

    let sum = 0
    const logsVistos = new Set()
     const newLogs = logs.filter(log => {
        if (logsVistos.has(log.id)){
            return false
        }
        logsVistos.add(log.id)
        if (log.status === "ERROR" && log.isTest === false){
            return true
        }
        return false
    })
    console.log(newLogs)
    newLogs.map(log => sum += log.amount)

    return sum
}