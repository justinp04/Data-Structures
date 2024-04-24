# Trees
Trees are data structures that are sorted in hierarchy, if I was to give an example of something that already exists, this would be the family tree.\
\
With each node (the name for each value point in a tree), there are associated *children* which just have a lower value than that of the current node. \
The node that is directly above the children is called the *parent* node, and all nodes have a parent except for the *root* node.\
\
The root node is the first node in the tree and has the largest value with regards to the metric that is measured.\
\
Within a tree, there are also leaf nodes, these are the nodes without any children and can be found at the bottom of the tree.\
\
The length of a tree is the longest path possible from the root node to a leaf node (without travelling backwards).

## Types of trees
There are many types of trees, there are binary trees (each parent only having 2 children) and n-ary trees (each parent having an *n* amount of children).\

## Tree
### Instance fields (Tree)
In a tree, the only field that we would need is the **root**.\
We only need the root as each node will have a pointer to its children and we can traverse the tree this way.

### Methods (Tree)
The methods required for a tree are:
- Constructor (Create)
- searchTree (look for a specific node to update, insert, delete, or read)
- insertNode
- deleteNode (similar process to insert, but delete instead of inserting)

## Tree Node
### Instance fields (Tree Node)
Tree nodes are each node the tree that holds the:
- Value
- Children (list)
- Parent

### Methods (Tree Node)
- Constructor
- getValue
- updateValue
- getParent
- updateParent
- getChildren
- updateChildren
