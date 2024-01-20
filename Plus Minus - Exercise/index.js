function plusMinus (arr) {
    let nums = {
        'positive': 0,
        'negative': 0,
        'zero': 0,
    };
    arr.forEach(element => {
        if(element > 0){
            nums['positive'] += 1;
        }
        if(element < 0){
            nums['negative'] += 1;
        }
        else{
            nums['zero'] += 1;
        }
    });
    const keys = Object.keys(nums)
    keys.forEach(key => {
        const ratio = nums[key] / arr.length;
        console.log(ratio.toFixed(6));
    });
}