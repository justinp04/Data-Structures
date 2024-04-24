import { Node } from './treeNode.js'

class Tree
{
    constructor()
    {
        this.root = new Node();
    }

    // Getter
    // Search if the node with the corresponding value exists
    searchNode(value, node)
    {
        // Recursively check through all the children
        // Start at the root
        if(node.getChildren().length == 0){/* This means that there is no children*/}
        else
        {
            // Iterate through the children
            node.getChildren().forEach(child => searchNode(value));
        }
    }

    // Setter
    insertNode(node)
    {
        // Look for the best position to insert the node
    }
}