// ====================================================
// UnGravity :: A workout checklist web app
// MVC with MySQL, Node, Express, Handlebars and custom ORM.
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// TODOLIST.JS - jQuery for browser-side DOM manipulation of rendered HTML
// ====================================================

// NOTE: put link for this script at the BOTTOM of main.handlebars page,
// so event handler scripts load AFTER elements they handle have been rendered


// start jQuery wrapper function
$(function () {

    // ========================================================

    // EVENT HANDLER FOR .change-status BUTTON
    $(".change-status").on("click", function (event) {

        // variable for the data-id="" property of THIS button
        // which is set to the task's db id: number by Handlebars
        var id = $(this).data("id");

        // variable for the data-newstatus="" property of THIS button
        // which is set as the task's database value of done: by Handlebars
        // NOTE: Handlebars has swapped the true|false value of done: in the rendered HTML
        // in order for it to be grabbed here and set as the new value in the database
        var newStatus = $(this).data("newstatus");

        // create an object which is {done: 0 | false} or {done: 1 | true},
        // based on the SWAPPED done: value in the rendered HTML
        var newStatusState = {
            done: newStatus
        };

        // Send the PUT request with the swapped value as the new value in database
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newStatusState
        }).then(
            function () {
                console.log("changed status to", newStatus);
                // Reload the page to get the updated list
                $("#new-task").val("");
                location.reload();
            }
        );
    });


    // ========================================================

    // EVENT HANDLER FOR submit BUTTON
    $(".create-form").on("submit", function (event) {

        // Make sure to preventDefault on a submit button event.
        event.preventDefault();

        var newTask = {
            // put form input id="new-task" trimmed value into an object variable
            task: $("#new-task").val().trim(),
            // set the task's "done" value as "false" by default
            done: false
        };

        // POST request to router.post("/api/tasks", ...) in tasks_controller.js
        $.ajax("/api/tasks",
                // and send POST body JSON with data: value as the newTask object
                {
                    type: "POST",
                    data: newTask
                })

            // .then, when POST responds by sending (res),
            .then(function () {

                // confirm creation of new task
                console.log("created new to-do task");

                // and reload the page so selectAll() can display updated list
                location.reload();

            }); // end .then promise handler function

    }); // end .on("submit") event handler


    // ========================================================


    // EVENT HANDLER FOR .delete-task BUTTON
    $(".delete-task").on("click", function (event) {

        // create a variable to stand for value of data-id="{{this.id}}" value
        // to get the database table id of the task to be deleted
        var id = $(this).data("id");

        // Send the DELETE request to router.delete() path in tasks_controller.js
        // and tag the value of var id onto the call, for /api/tasks/:id 
        $.ajax("/api/tasks/" + id, {
            // just send type: of request, no data needed besides id in URL
            type: "DELETE"
        }).then(
            // after DELETE request is sent,
            function () {
                // console the deleted task's id number
                console.log("deleted task number " + id);
                // and reload the page to refresh all tasks
                location.reload();
            }); // end promise handler function
    }); // end .delete-task event handler


}); // end jQuery wrapper function