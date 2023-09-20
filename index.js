class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class linkedList {
  constructor() {
    this.head = null
  }

  appendNode(data) {
    const newNode = new Node(data)
    if (this.head == null) {
      this.head = newNode
    } else {
      let tmp = this.head
      while (tmp.next) {
        tmp = tmp.next
      }
      tmp.next = newNode
    }
  }

  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  printList() {
    let tmp = this.head
    let counter = 0
    while (tmp) {
      tmp = tmp.next
      counter++
    }
    console.log(counter)
  }

  printHead() {
    if (!this.head) return "No head, try again tomorrow"
    let tmp = this.head
    console.log(tmp.data)
  }

  printTail() {
    let tmp = this.head
    let tail = null
    while (tmp) {
      tail = tmp
      tmp = tmp.next
    }
    if (tail) {
      console.log(tail.data)
    } else {
      console.log("Empty list bro")
    }
  }

  print(index) {
    let tmp = this.head
    let counter = 0
    if (counter > index) console.log("Node is non-existent")
    while (counter < index) {
      tmp = tmp.next
      counter++
    }
    console.log(tmp.data)
  }

  pop() {
    let tmp = this.head.next
    let previous = this.head
    while (tmp.next) {
      previous = tmp
      tmp = tmp.next
    }
    previous.next = null
  }

  contains(value) {
    let tmp = this.head
    while (tmp) {
      if (tmp.data == value) return true
      tmp = tmp.next
    }
    return false
  }

  find(value) {
    let tmp = this.head
    let counter = 0
    while (tmp) {
      if (tmp.data == value) return counter
      tmp = tmp.next
      counter++
    }
    return null
  }

  insertAt(data, index) {
    const newNode = new Node(data)
    let tmp = this.head
    let previous = null
    let counter = 0
    while (counter < index) {
      if (!tmp) return
      previous = tmp
      tmp = tmp.next
      counter++
    }
    newNode.next = tmp
    previous.next = newNode
  }

  removeAt(index) {
    let tmp = this.head
    let previous = null
    let counter = 0
    while (counter < index) {
      previous = tmp
      tmp = tmp.next
      counter++
    }
    previous.next = tmp.next
  }

  reverseList() {
    let current = this.head
    let previous = null
    let next = null
    while (current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }
    this.head = previous
  }

  printData() {
    let tmp = this.head
    while (tmp) {
      console.log(tmp.data)
      tmp = tmp.next
    }
  }
}
const list = new linkedList()

list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
list.appendNode(5)
list.prepend(1)
list.prepend(0)
list.insertAt(6, 6)