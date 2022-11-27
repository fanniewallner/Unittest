/**
*@jest-environment jsdom
*/

import { removeAllTodos } from "../ts/functions";
import { createNewTodo, displayError } from "../ts/main";
import { Todo } from "../ts/models/Todo";
import * as functions from "./../ts/main";
import * as fns from "./../ts/functions";

//1. addEventListener på clearTodos-button, ska trigga funktionen clearTodos
test("button should be clicked", () => {
    //Arrange
    let spy = jest.spyOn(functions,"clearTodos").mockReturnValue();
    document.body.innerHTML = `<button type="button" id="clearTodos">Rensa Lista</button>`

    functions.init();

    //Act
    document.getElementById("clearTodos")?.click();

    //Assert
    expect(spy).toHaveBeenCalled();

});

//2. todo form
test ("should be able to submit form", () => {

    // Arrange
    let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
    document.body.innerHTML = 
    `<form id="newTodoForm">
    <div>
    <input type="text" id="newTodoText" />
    <button>Skapa</button>
    <button type="button" id="clearTodos">Rensa lista</button>
    </div>
    <div id="error" class="error">
    </div>
    </form>`; // declare needed dom-html for the form to be able to be submitted
    functions.init();
 
    // Act
    document.querySelector("button")?.click(); // if button is found in dom, trigger clickevent
 
    // Assert
    expect(spy).toHaveBeenCalledTimes(1); // one click
 });
 
describe("createHtml", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.resetAllMocks();
    });
    test("Should create html for li-element and add to ul", () => {
        //Arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let ul = document.getElementById("todos") as HTMLUListElement;
        let todos: Todo[] = [new Todo("blabla", false)];

        //Act
        functions.createHtml(todos);

        //Assert
        expect(ul.innerHTML).toBe(`<li class=\"todo__text\">blabla</li>`);
    });
});

describe ("toggle todo", () => {
    //Funktion som går ut på att vi klickar på knappen för att call changeTodo
test("Should call changeTodo", () => {
    //Arrange
    let spy = jest.spyOn(fns,"changeTodo").mockReturnValue(); 
    let todo: Todo = new Todo("handin", false);
    
    //Act
    functions.toggleTodo(todo);
    
    //Assert
    expect(spy).toHaveBeenCalled();
    
    })

    test("Should call createHtml", () => {
        //Ska call funktionen createHtml
        //Arrange
        let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
        let todo: Todo = new Todo("handin", false);
    
        //Act
        functions.toggleTodo(todo);

        //Assert
        expect(spy).toHaveBeenCalled();
    })


});


//createHtml
describe("createNewTodo", () => {
    //Test för createNewTodo om den funkar
test("Should call createHtml for Todo", () => {
    //Arrange
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue;
    let todoText:string = "handin";
    let todos: Todo[] = [new Todo("handin", false)];

    //Act
    functions.createNewTodo(todoText, todos);

    //Assert
    expect(spy).toHaveBeenCalled();
});

//Test för createNEwTodo om den inte funkar
test("Should not call createHtml for Todo", () => {
    //Arrange
    let spy = jest.spyOn(functions, "displayError").mockReturnValue;
    let todoText:string = "1";
    let todos: Todo[] = [new Todo("handin", false)];

    //Act
    functions.createNewTodo(todoText, todos);

    //Assert
    expect(spy).toBeCalled();
})
});



//displayError
describe ("error message in DOM", () => {
test ("should add HTMLstringvalue to div-element", () => {

    // Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>`; // req dom-element for checking test
    let error: string = "error"; // to be added as innerhtml to divelement
    let show: boolean = true;

    // Act
    functions.displayError(error, show); // true

    // Assert
    expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe("error"); // innerhtml for div should be $error
  });

test("Should NOT display error message in DOM", () => {
    //Arrange
    let errorContainer:HTMLDivElement = document.getElementById("error") as HTMLDivElement;
    let error:string = "error"
    let show:boolean = false;
    errorContainer.innerHTML = error;
    
    //Act
    displayError(error, show);

    //Assert
    expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe("error");
})
});

//Funktion som ska trigga removeAllTodos och en som ska trigga createHTML
describe("clearTodos", () => {
    test("should call removeAllTodos", () => {
      //arrange
      let spy = jest.spyOn(fns, "removeAllTodos").mockReturnValue();
      let todos: Todo[] = [new Todo("remove all todos", false)];
      //act
      functions.clearTodos(todos);
      //assert
      expect(spy).toHaveBeenCalled();
    });

    test("should call createHtml", () => {
        //arrange
        let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
        let todos: Todo[] = [new Todo("create html", false)];
        //act
        functions.clearTodos(todos);
        //assert
        expect(spy).toHaveBeenCalled();
    });
});

  
/*test ("should remove all todos", () => {
    // Arrange
  
    let todos: Todo[] = [new Todo("Hand in assignment", false)];
    
    //Act

    removeAllTodos(todos);

    //Assert
    expect(todos.length).toBe(0);
});
*/
  