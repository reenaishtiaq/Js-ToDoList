





function checkList() {

    // Get the input
    var myList = document.querySelector("input").value;

    // List added by user is equal to the value of input
    var userInput = document.createTextNode(myList);

    var contentList = document.querySelector("ol");

    // Get the li tag
    var list = document.createElement("li");

    // Content of li is equal to user input
    list.appendChild(userInput);
    
    contentList.appendChild(list);
}




