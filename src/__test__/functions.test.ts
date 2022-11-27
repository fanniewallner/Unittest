import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo"

describe("addTodo", () => {
    test("should add a todo to list", () => {
        //Arrange
         let todos:Todo[] = [new Todo("Hand in assignment", false)]; //Skapar lista och ger listan ett objekt baserat på klassen newTodo
         let length = todos.length; 
         let text = "Hand in assignment";
    
        //Act
        addTodo(text, todos);   //Call function addTodo, passing parameters for text and list
    
        //Assert
        expect(todos.length).toBe(length + 1);  //We expect that the list should add 1
        expect(todos[todos.length - 1].text).toBe(text); //The lastsly added list should have the value of text ("hand in assignment")
        
    })
    
    test("Should not add todo to list", ()=> {
        //Arrange
        let todos:Todo[] = [new Todo("", false)]; //Skapar lista och ger listan ett objekt baserat på klassen newTodo
        let length = todos.length; 
        let text = "";
    
        //Act
        addTodo(text, todos);
    
        //Assert
        expect(todos.length).toBe(length);  //We expect that the list should add 1
        expect(todos[todos.length - 1].text).toBe(text); //The lastsly added list should have the value of text ("hand in assignment")
    })
});

 test("should change todo", () => {
     //Arrange
     let todo:Todo = new Todo ("päron", false);

     //Act
     changeTodo(todo);

     //Assert
     expect(todo.done).toBe(true);
 })


test("Should remove all tasks from list", () => {
//Arrange
let todos:Todo[] = [new Todo("Task text here", false)]; 

//Act
removeAllTodos(todos);

//Assert
expect(todos.length).toBe(0);
})