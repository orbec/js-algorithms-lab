function getAverageHighPriorityTime(tickets){

    let avgResolutionMinutes = 0
    let count = 0

    for (const ticket of tickets){
        const {priority, resolutionMinutes, resolvedBy} = ticket
        if (priority === "HIGH" && resolvedBy !== "BOT" ){
            avgResolutionMinutes += resolutionMinutes
            count += 1
        }
    }
    if (count !== 0){
        avgResolutionMinutes = avgResolutionMinutes / count
    }
    return avgResolutionMinutes
}

export {getAverageHighPriorityTime}