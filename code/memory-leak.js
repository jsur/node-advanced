const stack = {}
function MyClass () {

}
for (let i = 0; i < 100000000; i++) {
  stack[i] = new MyClass()
}

/*

  The reason for a memory leak here is that the new MyClass()
  instances are never picked up by the garbage collector, as they
  are always referred to from the stack object.

*/
