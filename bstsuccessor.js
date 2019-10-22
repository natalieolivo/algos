function Node(key) {
	this.key = key;
	this.parent = null;
	this.left = null;
	this.right = null;
}

// Cstr to create a new BST
function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
	var root = inputNode.right;

	while(root) {
		console.log(`checking in right subtree`);
		if(root.left) {
			root = root.left
		}
		return root;
	}

	root = inputNode.parent;
	while(root) {
		console.log(`checking parents, ${root.key}`);
		if(root.key > inputNode.key) {
			return root;
		}
		root = root.parent;
	}

	return root;
}

BinarySearchTree.prototype.insert = function(key) {
	var root = this.root;
	
	// if the tree is empty create the root
	if(!root) {
		this.root = new Node(key);
		return;
	}

	// 2) Otherwise, create a node with the key 
	// and traverse down the tree to find where to insert it
	var currentNode = root;
	var newNode = new Node(key);

	while(currentNode !== null) {
		if(key < currentNode.key) {
			if(!currentNode.left) {
				currentNode.left = newNode;
				newNode.parent = currentNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if(!currentNode.right) {
				currentNode.right = newNode;
				newNode.parent = currentNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}

}

// Returns a reference to a node in the BST by its key
// Use this function when you need a node to test your
// findInOrderSuccessor function on
BinarySearchTree.prototype.getNodeByKey = function(key) {
	var currentNode = this.root;

	while(currentNode) {
		if(key === currentNode.key) {
			return currentNode;
		}

		if(key < currentNode.key) {
			currentNode = currentNode.left;
		}
		else {
			currentNode = currentNode.right;
		}
	}

	return null;
}

var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12)
bst.insert(11);
bst.insert(14)

// Get a reference to the node whose key is 11
var test = bst.getNodeByKey(11);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

if(succ) {
	console.log(`Inorder successor of ${test.key} is ${succ.key}`);
} else {
	console.log(`Inorder successor does not exist`);
}

