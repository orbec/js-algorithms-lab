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

const logs = [
    { id: "TX-101", status: "ERROR", amount: 500, isTest: false },
    { id: "TX-102", status: "OK", amount: 1200, isTest: false },
    { id: "TX-101", status: "ERROR", amount: 500, isTest: false },
    { id: "TX-103", status: "ERROR", amount: 300, isTest: true },
    { id: "TX-104", status: "ERROR", amount: 850, isTest: false }
  ];

  getValidErrorTotal(logs)