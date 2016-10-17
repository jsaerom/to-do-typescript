/// <reference path="../typings/tsd.d.ts" />
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-people.ts" />

var thorTasks: String[];


$(document).ready(function(){
  $("#newTask").submit(function(event){
    var tasks = [];
    event.preventDefault();
    var newDescription = $("#description").val();
    var newTaskId = $("#taskId").val();
    var newPriority = $("#priority").val();
    var taskType = $("#taskType").val();
    var stringDueDate = $("#dueDate").val();
    var dueDate = new Date(stringDueDate);
    var thor = people.thor;
    if(taskType === "Work") {
      var workTask = new ToDoList.WorkTask(dueDate, newDescription, newPriority, thor);

      tasks.push(workTask);
    } else if (taskType === "Hobby"){
      var hobbyTask = new ToDoList.HobbyTask(newDescription);
      tasks.push(hobbyTask);
    } else {
      var homeTask = new ToDoList.HomeTask(newDescription, newPriority, thor);
      tasks.push(homeTask);
    }
    thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);

    console.log("Here are Thor's tasks: ");
    for(var task of thorTasks){
      $("#tasks").append("<li>" + task + "</li>");
    }
  });




});
