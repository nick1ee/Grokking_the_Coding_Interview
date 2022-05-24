// MARK: The key point is there is no need to shrink sliding window when reaching a duplicated character.
const non_repeat_substring = function (str) {
    var window_start = 0;
    var char_frequency = {};
    var maximum_length = 0;

    for (let window_end = 0; window_end < str.length; window_end++) {
        const right_char = str[window_end];
        if (!(right_char in char_frequency)) {
            char_frequency[right_char] = 0;
        } else {
            char_frequency = {};
            char_frequency[right_char] = 0
            window_start = window_end;
        }

        maximum_length = Math.max(maximum_length, window_end - window_start + 1);
    }

    return maximum_length;
};
