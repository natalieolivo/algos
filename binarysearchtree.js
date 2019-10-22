(function() {
        
    const empty = () => {
        return { val: null };
    }

    const insert = (tree, element) => {
        if(!tree.val) {
            // empty tree
            tree.val = element;
            tree.left = empty();
            tree.right = empty();
        } else {
            if(tree.val < element) {
                insert(tree.right, element);
            } else {
                insert(tree.left, element);
            }
        }
    };

    const tree = empty();
    let arr = [5,3,1,13,4,21,8,6];
    
    arr.forEach((n) => {
        insert(tree, n);        
    });
    console.log(JSON.stringify(tree, null, 2));

})();