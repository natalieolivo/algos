let wordList = ["hot","dot","dog","lot","log"];
let beginWord = "hit";
let endWord = "cog";
let neighborMap = new Map();
let visited = new Set();
let graphLevelQueue = [];
let level = 0;

/**
 * 
 * Solution:
 * hit--> hot --> dot --> dog --> cog
 * 
 */

/*/
    find associated words, words that require one change
    to transform and mark letter that would be transformed with "*"
*/
const findNeighborWords = (word) => {
    let neighboors = [];    

    for(let i = 0; i < word.length; i++) {
        neighboors.push(word.slice(0, i) + "*" + word.slice(i+1));
    }
    return neighboors;
};

const countWordTransforms = (beginWord, endWord, wordList) => {        
    let currentQueuedWord = "";

    if(!wordList) return;
    
    // add begin word to wordList
    wordList.push(beginWord);

    for(let i = 0; i < wordList.length; i++) {
        neighborMap.set(wordList[i], findNeighborWords(wordList[i]));
    }
    
    graphLevelQueue.push(beginWord);
    
    while(graphLevelQueue.length > 0) {
        currentQueuedWord = graphLevelQueue.pop();
        level++; // BFS, counting level movement

        // expected levels
        // hit --> hot --> dot --> dog --> cog

        if(currentQueuedWord === endWord) {
            return level;
        } else {            
            if(visited.size === wordList.length) {
                return 0;
            }
        }
        
        // neighborMap = {
        // 'hot' => [ '*ot', 'h*t', 'ho*' ],
        // 'dot' => [ '*ot', 'd*t', 'do*' ],
        // 'dog' => [ '*og', 'd*g', 'do*' ],
        // 'lot' => [ '*ot', 'l*t', 'lo*' ],
        // 'log' => [ '*og', 'l*g', 'lo*' ],
        // 'cog' => [ '*og', 'c*g', 'co*' ],
        // 'hit' => [ '*it', 'h*t', 'hi*' ] 
        // }
        for([neighboor, neighboorValue] of neighborMap.entries()) {
            // don't count self
            if(neighboor === currentQueuedWord) {
                continue;
            }

            neighboorValue.forEach((wildcard) => {
                if(neighborMap.get(currentQueuedWord).indexOf(wildcard) > -1) {
                    // found current wild card value in neighborMap entry, push key on queue
                    graphLevelQueue.push(neighboor);                    
                }
            });            
        }
        // exclude visited
        visited.add(currentQueuedWord);
        neighborMap.delete(currentQueuedWord);        
    }        

    return level;
}

console.log(countWordTransforms(beginWord, endWord, wordList));