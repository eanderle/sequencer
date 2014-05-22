$(document).ready(function() {
    var clock = $("#clock");
    var addRowButton = $("#addRowButton");
    var eventTable = $("#eventTable");

    var recordButtonHtml = '<button class="btn btn-danger">Record</button>'

    var updateClock = function() {
        var pad = function(i) {
            return (i < 10 ? "0" : "") + i;
        }

        var date = new Date()
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        clock.html(pad(hours) + ":" + pad(minutes) + ":" + pad(seconds));
    }

    addRowButton.click(function(e) {
        var newButton = $(recordButtonHtml);
        var newLabel = $('<label>NEW</label>');
        var newRow = $('<tr/>');

        [newLabel, newButton].forEach(function(elt, idx, arr) {
            var col = $('<td/>');
            elt.appendTo(col);
            col.appendTo(newRow);
        });
        newRow.appendTo(eventTable);

        newButton.click(function(e) {
            newLabel.html("RECORDED");
        });
    });

    updateClock();

    setInterval(updateClock, 1000);
});
