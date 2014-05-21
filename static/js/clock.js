$(document).ready(function() {
    var updateClock = function() {
        var pad = function(i) {
            return (i < 10 ? "0" : "") + i;
        }

        var date = new Date()
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        $("#clock").html(pad(hours) + ":" + pad(minutes) + ":" + pad(seconds));
    }

    $("#addRowButton").click(function(e) {
        var newRow = $("<tr><td>NEW</td></tr>");
        newRow.appendTo($("#eventTable"));
    });

    updateClock();

    setInterval(updateClock, 1000);
});
