export class Node
{
    constructor()
    {
        this.value = null;
        this.children = [];
        this.parent = null;
    }

    // Getters
    getValue()
    {
        return this.value;
    }

    getChildren()
    {
        return this.children;
    }

    getParent()
    {
        return this.parent;
    }

    // Method to update the value in the node
    setValue(value)
    {
        this.value = value;
    }

    // List of nodes
    setChildren(children)
    {
        this.children = children;
    }

    // Input parameter is another node
    setParent(parent)
    {
        this.parent = parent;
    }
}