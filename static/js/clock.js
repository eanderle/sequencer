$(document).ready(function() {
    var clock = $("#clock");
    var addRowButton = $("#addRowButton");
    var eventTable = $("#eventTable");

    var getTime = function() {
        var pad = function(i) {
            return (i < 10 ? "0" : "") + i;
        }

        var date = new Date()
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours();

        return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    }

    var updateClock = function() {
        clock.html(getTime());
    }

    var createNewEvent = function() {
        var row = $('<tr/>');
        var input = $('<input placeholder="New Event"></input>');
        var label = $('<label>N/A</label>');
        var button = $('<button class="btn btn-danger">Record</button>');

        [input, label, button].forEach(function(elt, idx, arr) {
            var col = $('<td/>');
            elt.appendTo(col);
            col.appendTo(row);
        });
        row.appendTo(eventTable);

        button.click(function(e) {
            label.html(getTime());
        });
    }

    addRowButton.click(function(e) {
        createNewEvent();
    });

    updateClock();
    createNewEvent();

    setInterval(updateClock, 1000);
});
