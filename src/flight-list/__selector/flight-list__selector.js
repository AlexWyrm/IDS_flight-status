var toggleArrivals = function () {
    $("tr.flight-item__type_arrival").toggleClass("collapsed");
    highlightOdd();
};

var toggleDepartures = function () {
    $("tr.flight-item__type_departure").toggleClass("collapsed");
    highlightOdd();
};