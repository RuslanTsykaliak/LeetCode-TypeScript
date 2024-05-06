function sortedSquares(nums: number[]): number[] {
    let n = nums.length
    let result: number[] = new Array(n)
    let i = 0, j = n - 1
    for (let p = n - 1; p >= 0; p--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result[p] = nums[i] * nums[i]
            i++
        } else {
            result[p] = nums[j] * nums[j]
            j--
        }
    }
    return result
};