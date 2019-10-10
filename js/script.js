$(document).ready(function() {
    $('.box').click(function() {
        // When we click on an element that has a 'box' class, this event will be fired
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var numberClass = classNames[1];
        if ($(this).css('background-color') == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $('.' + numberClass).css('background-color', '#000');
        }
        else {
            // Else, first turn all elements with the 'box' class black, then turn all elements with the same number class name as the clicked element red
            $('.' + boxClass).css('background', '#000');
            $('.' + numberClass).css('background', 'rgb(255, 0, 0)');
        }
    });
});
