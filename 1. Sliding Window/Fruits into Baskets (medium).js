const fruits_into_baskets = function (fruits) {
    var window_start = 0;
    var fruit_frequency = {};
    var maximum_length = 0;

    for (let window_end = 0; window_end < fruits.length; window_end++) {
        const right_fruit = fruits[window_end];
        if (!(right_fruit in fruit_frequency)) {
            fruit_frequency[right_fruit] = 0;
        }

        fruit_frequency[right_fruit] += 1;

        while (Object.keys(fruit_frequency).length > 2) {
            const left_fruit = fruits[window_start];
            fruit_frequency[left_fruit] -= 1;

            if (fruit_frequency[left_fruit] === 0) {
                delete fruit_frequency[left_fruit];
            }

            window_start += 1;
        }

        maximum_length = Math.max(maximum_length, window_end - window_start + 1);
    }

    return maximum_length;
};
