const max_sub_array_of_size_k = function (k, arr) {
    if (arr.length < k) {
        return -1;
    }

    var maximumSum = 0;
    var currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            currentSum = currentSum + arr[i];
            maximumSum = currentSum;
            continue;
        }

        currentSum = currentSum + arr[i] - arr[i - k];
        if (currentSum > maximumSum) {
            maximumSum = currentSum;
        }
    }

    return maximumSum;
};
