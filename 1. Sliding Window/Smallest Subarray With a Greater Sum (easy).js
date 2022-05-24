// TODO: use window_start, window_end.
// TODO: while loop in for loop.
const smallest_subarray_sum = function (s, arr) {
    var window_start = 0;
    var window_sum = 0;
    var minCount = Infinity;

    for (let window_end = 0; window_end < arr.length; window_end++) {
        if (arr[window_end] > s) {
            return 1;
        }

        window_sum += arr[window_end];

        while (window_sum >= s) {
            minCount = Math.min(minCount, window_end - window_start + 1);
            window_sum -= arr[window_start];
            window_start += 1
        }
    }

    if (minCount === Infinity) {
        return 0;
    }

    return minCount;
};

