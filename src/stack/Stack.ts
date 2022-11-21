export class Stack {
    private items: Record<string, any>;
    private count: number;
  
    constructor() {
      this.items = {};
      this.count = 0;
    }
  
    //add item to end of stack
    push(item: any) {
      this.items[this.count] = item
      this.count++
    }
    //remove item from end of the stack
    pop() {
      if( this.isEmpty() ){
        return null
      }
      
      const lastItem = this.peek()
      delete this.items[ this.count - 1 ]
      this.count--
      return lastItem

    }
    //view item at end of stack
    peek() {
      if( this.isEmpty() ){
        return null
      }

      return this.items[this.count - 1]
    }
    //return length of stack
    size() {
      return this.count
    }
    //return booleab
    isEmpty() {
      return this.size() ? false : true
    }
    //clear the stack
    clear() {
      this.items = {}
      this.count = 0
    }
  }
  