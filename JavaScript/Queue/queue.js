export class Queue 
{
    constructor()
    {
        this.queue = [];
    }

    // Peak
    peak()
    {
        // Check if the queue is empty
        if(this.queue.length == 0)
        {
            return 'The queue is currently empty'; 
        }
        return this.queue[0];
    }

    // Push
    push(value)
    {
        this.queue.push(value);
    }

    // Pop
    pop()
    {
        // Practice immutability?
        return this.queue.shift();;
    }

    // Print
    returnQueue() 
    {
        return this.queue;
    }

    // Length
    length()
    {
        return this.queue.length;
    }

    // Reset
    resetQueue()
    {
        this.queue = [];
    }
}