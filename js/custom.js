/******************************************************************************************************************/
/* CUSTOM JS */
/*****************************************************************************************************************/

$(document).ready(function () {
    $("#portfolio-sorting li a").click(function () {
        // Remove the current active class
        $("#portfolio-sorting li a.active").removeClass('active');

        // Add the active class to the clicked button
        $(this).addClass('active');


        // Get the button text (filter value)
        var filterValue = 'cat-' + $(this).text().toLowerCase().replace(' ', '-');

        //If we clicked "All", we show all itmes 
        if (filterValue === "cat-all") {
            $('.portfolio-entry').removeClass('hidden');

        } else {
            // else, we find the portfolio entries that match to the clicked button
            // and then add the class of .hidden
            $(".portfolio-entry").each(function () {
                if (!$(this).hasClass(filterValue)) {
                    $(this).addClass('hidden');
                } else {
                    $(this).removeClass('hidden');
                }
            });
        }

        return false;

    });

});