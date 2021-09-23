// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0 ; i < key.length ; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }
  /*
    returns the value using the key
  */
  read(key) {
    //get the value using hash function
    let theKey = this.data[this.hashMod(key)];
    while(theKey){
      if(theKey.key === key) return theKey.value;
      theKey = theKey.next;
    }
  }

  insert(key, value) {
    
    if(this.count/this.capacity > 0.9){
      this.resize();
    }
    let idx = this.hashMod(key);
    let currPair = this.data[idx];
    while(currPair && currPair.key !== key){
        currPair = currPair.next;
    }
    if(currPair){
      currPair.value = value;
    }else{
      let nextNode = new KeyValuePair(key,value);
      nextNode.next = this.data[idx];
      this.data[idx] = nextNode;
    }
    this.count++;
  }


  resize() {
    let oldData = this.data
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    oldData.forEach(el => {
      while(el){
        this.insert(el.key,el.value);
        el = el.next;
      }
    })
  }


  delete(key) {
    let theKey = this.data[this.hashMod(key)];
    while(theKey){
      if(theKey.key === key){
        theKey = null;
        this.count--;
        return;
      }
      theKey = theKey.next;
    }
  }

}


module.exports = HashTable;