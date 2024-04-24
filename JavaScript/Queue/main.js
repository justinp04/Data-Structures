import { Queue } from './queue.js'

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

// test cases
// test Peak
if(queue.peak() === queue.returnQueue()[0])
{
    console.log("peak(): Test case passed");
}
else
{
    console.log("peak(): Test case failed");
}

// console.log("The first item in the queue is: ", queue.returnQueue()[0])

// test Push
let newNum = 4;
queue.push(4);
if(queue.returnQueue()[queue.length() - 1] == newNum)
{
    console.log("push(): Test case passed");
}
else
{
    console.log("push(): Test case failed");
}

// console.log("The last index is: ", queue.length());
// console.log("Last element in queue = ", queue.returnQueue()[queue.length - 1]);

// test Pop
if(queue.returnQueue()[0] === queue.pop())
{
    console.log("pop(): Test case passed");
}
else
{
    console.log("pop(): Test case failed");
}

// test Print
if(JSON.stringify(queue.returnQueue()) == JSON.stringify([2,3,4]))
{
    console.log("returnQueue(): Test case passed");
}
else
{
    console.log("returnQueue(): Test case failed");
}

// test Reset queue
queue.resetQueue();
if(queue.length() == 0)
{
    console.log("resetQueue(): Test case passed");
}
else
{
    console.log("resetQueue(): Test case failed");
}