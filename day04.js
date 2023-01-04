const sampleInput = ["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"];

function partOne(array) {
    let answerCount = 0;
    //for each pair
    for (assignmentPair of array) {
        //split into two elves
        const indivElves = assignmentPair.split(',');
        const firstElf = indivElves[0];
        const secondElf = indivElves[1];

        //get min/max of first Elf
        const assignmentsOne = firstElf.split('-');
        const minFirst = parseInt(assignmentsOne[0]);
        const maxFirst = parseInt(assignmentsOne[1]);

        //get min/max of second Elf
        const assignmentsTwo = secondElf.split('-');
        const minSecond = parseInt(assignmentsTwo[0]);
        const maxSecond = parseInt(assignmentsTwo[1]);

        //check if first is contained in second
        if ((minFirst >= minSecond) && (maxFirst <= maxSecond)) {
            answerCount++;
        }

        //check if second is contained in first
        if((minSecond >= minFirst) && (maxSecond <= maxFirst)) {
            answerCount++;
        }

        //check if ranges are identical
        if((minFirst === minSecond) && (maxFirst === maxSecond)) {
            answerCount--;
        }


    }   
    return answerCount;
}


function partTwo(array) {
    let answerCount = 0;
    //for each pair
    for (assignmentPair of array) {
        //split into two elves
        const indivElves = assignmentPair.split(',');
        const firstElf = indivElves[0];
        const secondElf = indivElves[1];

        //get min/max of first Elf
        const assignmentsOne = firstElf.split('-');
        const minFirst = parseInt(assignmentsOne[0]);
        const maxFirst = parseInt(assignmentsOne[1]);

        //get min/max of second Elf
        const assignmentsTwo = secondElf.split('-');
        const minSecond = parseInt(assignmentsTwo[0]);
        const maxSecond = parseInt(assignmentsTwo[1]);

        if(maxFirst >= minSecond && minFirst <= maxSecond) {
            answerCount++;
        }
    }
    return answerCount;
};

function partTwov2(array) {
    let ansArray = [];
    let answerCount = 0;
    //for each pair
    for (let i = 0; i < array.length; i++) {
        //split into two elves
        const indivElves = array[i].split(',');
        const firstElf = indivElves[0];
        const secondElf = indivElves[1];

        //get min/max of first Elf
        const assignmentsOne = firstElf.split('-');
        const minFirst = parseInt(assignmentsOne[0]);
        const maxFirst = parseInt(assignmentsOne[1]);

        //get min/max of second Elf
        const assignmentsTwo = secondElf.split('-');
        const minSecond = parseInt(assignmentsTwo[0]);
        const maxSecond = parseInt(assignmentsTwo[1]);

        if(maxFirst >= minSecond) {
            ansArray[i] = 1;
        }
        else {
            ansArray[i] = 0;
        }
    }

    for (item of ansArray) {
        answerCount = answerCount + item;
    }
    return answerCount;
};
