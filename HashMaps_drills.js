class HashMap{
  constructor(initCap=8){
    this.length= 0; 
    this.hashTable = [];
    this.cap = initialCap; 
    this.deleted=0;
}

get(key){
  const index = this.findSlot(key);
  if(this.hashTable[index] === undefined){
    throw new Error('Key error');
   }
   return this.hashTable[index].value;
  }
  
  set(key,value){
    const loadRatio = (this.length + this.deleted + 1) / this.cap;
    if (loadRatio > this.MAX_LOAD_RATIO){
      this.resize(this.cap * this.SIZE_RATIO);
    }
   const index = this.findSlot(key);
   if(!this.hashTable[index]){
      this.length++;
    }
    
    this.hashTable[index] = {
      key, 
      value,
       DELETED: false
     };
     
     delete(key) {
        const index = this.findSlot(key);
        const slot = this.hashTable[index];
        if (slot === undefined) {
          throw new Error('error');
        }
        slot.DELETED = true; 
        this.length-1;
        this.deleted++;
    }
