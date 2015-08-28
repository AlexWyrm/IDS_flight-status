var details = $('.flight-list__details');

$('.flight-list__table').on('click', 'tbody tr', function (e) {
    showDetails(e.currentTarget);
});

var showDetails = function (rowDom) {
    var row = $(rowDom);
    var type = row.hasClass("flight-item__type_arrival") ? "Arrival" : "Departure";
    var code = row.find('.flight-item__code').html();
    var company = row.find('.flight-item__logo').html() + ' ' + row.find('.flight-item__company').html();
    var planeCell = row.find('.flight-item__plane');
    var plane = planeCell.find('.manufacturer').attr('data-manufacturer') + ' ' +
        planeCell.find('.model').attr('data-model');
    var airportCell = row.find('.flight-item__destination .airport');
    var airport = airportCell.attr('data-airport') + ' (' + airportCell.attr('data-airport-code') + ')';
    var time = row.find('.flight-item__time .time').attr("data-time");
    var status = row.find('.flight-item__status').html();
    var extra = row.find('.flight-item__extra').html();

    details.find('#details_type td').html(type);
    details.find('#details_code td').html(code);
    details.find('#details_company td').html(company);
    details.find('#details_plane td').html(plane);
    details.find('#details_destination td').html(airport);
    details.find('#details_time td').html(time);
    details.find('#details_status td').html(status);
    details.find('#details_extra td').html(extra);
    details.dialog({
        modal: true,
        width: 400,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
};