/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let input = s;
    const inputArray = input.split("");
    console.log(inputArray);
    // created array from string
    
    const valueArray = [];
    
    while(inputArray.length > 0){

    let currentPointer = inputArray.length - 1;
    let movingPointer = inputArray.length - 2;
        
    // addition & subtraction logic
    if(JSON.stringify(inputArray[currentPointer]) === JSON.stringify(inputArray[movingPointer])){
        console.log("They are the same! Let's check the next one!");
        
        if(JSON.stringify(inputArray[movingPointer]) === JSON.stringify(inputArray[movingPointer-1])){
            console.log("Great, three of the same, let's add them.")
            let firstRoman = parseInt(translate(inputArray[currentPointer]));
            let secondRoman = parseInt(translate(inputArray[movingPointer]));
            let thirdRoman = parseInt(translate(inputArray[movingPointer-1]));
            let output = firstRoman + secondRoman + thirdRoman;
            valueArray.push(output)
            inputArray.splice(inputArray.length - 3, 3);
            
        }else{
            console.log("Only two of them were the same, let's add the two we have!")
            let firstRoman = parseInt(translate(inputArray[currentPointer]));
            let secondRoman = parseInt(translate(inputArray[movingPointer]));
            let output = firstRoman + secondRoman;
            valueArray.push(output);
            inputArray.splice(inputArray.length - 2, 2);
            
        }
    }else if(parseInt(translate(inputArray[currentPointer])) > parseInt(translate(inputArray[movingPointer]))){
       console.log("The second value is smaller than the first! Let's Subtract!")
        let firstRoman = parseInt(translate(inputArray[currentPointer]));
        let secondRoman = parseInt(translate(inputArray[movingPointer]));
        let output = firstRoman - secondRoman;
        valueArray.push(output);
        inputArray.splice(inputArray.length - 2, 2);
        
    }else{
        // if there is no addition and no subtraction, add to value array.
        console.log("no addition or subtraction");
        console.log(inputArray[currentPointer] + "this in in the last else");
        let firstRoman = parseInt(translate(inputArray[currentPointer]));
        let output = firstRoman;
        valueArray.push(output);
        inputArray.splice(inputArray.length - 1, 1);
        if(inputArray.length = 0){
            console.log("whtf")
            return;
        }
    }
    } // while loop end
    

    
    let output = 0;
    for(i = 0; i < valueArray.length; i++){
        output += valueArray[i];
    }
    return output
    
}; // RomanToInt end


function translate(roman){
    let translate = {
        I: "1",
        V: "5",
        X: "10",
        L: "50",
        C: "100",
        D: "500",
        M: "1000"
    };
    
    console.log(roman + " this is in translate");
    return
    
    for(var key in translate){
        roman = roman.replace(new RegExp(key, "ig"), translate[key]);
    }
    return roman.charAt(0) + roman.slice(1);
};

