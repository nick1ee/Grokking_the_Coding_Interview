const longest_substring_with_k_distinct = function (str, k) {
    var window_start = 0;
    var longest_count = 0;
    var char_frequency = {};

    for (let window_end = 0; window_end < str.length; window_end++) {
        const next_char = str[window_end];
        if (!(next_char in char_frequency)) {
            char_frequency[next_char] = 0;
        }

        char_frequency[next_char] += 1;

        while (Object.keys(char_frequency).length > k) {
            const first_char = str[window_start];
            char_frequency[first_char] -= 1;
            if (char_frequency[first_char] === 0) {
                delete char_frequency[first_char];
            }

            window_start += 1;
        }

        longest_count = Math.max(longest_count, window_end - window_start + 1);
    }

    return longest_count;
};
