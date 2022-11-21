import { Stack } from "../Stack";

describe("stack tests", () => {
  test("Can add an item to stack", () => {
    const stack = new Stack();
    stack.push("james");
    expect(stack.size()).toEqual(1);
  });

  test("Can Remove an item from the stack", () => {
    const stack = new Stack();
    stack.push("james");
    stack.push("boyle");
    expect(stack.pop()).toEqual("boyle");
  });

  test("Can Peek the last item", () => {
    const stack = new Stack();
    stack.push("boyle");
    expect(stack.peek()).toEqual("boyle");
  });

  test("Can get the size of stack", () => {
    const stack = new Stack();
    stack.push("boyle");
    stack.push("James");
    stack.push("Greatness");
    expect(stack.size()).toEqual(3);
  });

  test("Check if stack is empty", () => {
    const stack = new Stack();
    stack.push("boyle");
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("Check if stack CAN BE CLEARED", () => {
    const stack = new Stack();
    stack.push("boyle");
    stack.clear();
    expect(stack.size()).toEqual(0);
  });
});
