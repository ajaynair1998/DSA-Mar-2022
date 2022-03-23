function majorityElement(nums) {
    let currentMajorityElement = nums[0]
    let timesOccured = 1
    
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === currentMajorityElement) {
            timesOccured++
        }
        else {
            if (timesOccured === 1) {
                currentMajorityElement = nums[i]
            }
            else {
                timesOccured--
            }
        }
    }
    return currentMajorityElement
}