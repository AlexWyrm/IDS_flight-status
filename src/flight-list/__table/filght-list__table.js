//table rows could be hidden, so invariant "every odd visible row is highlighted" can be only maintained this way
var rows = $('.flight-list__table tbody tr');
var highlightOdd = function () {
    rows.removeClass('highlighted');
    rows.filter(':visible:even').addClass('highlighted');
};
highlightOdd();

var minWidth = 600;
var resizeWidth = 900;
var priorities = 3;
var increment = Math.floor((resizeWidth - minWidth) / priorities);

var currentPriority = 3;
var table = $('.flight-list__table');

var collapseColumns = function () {
    var targetPriority;
    if (table.width() > resizeWidth) {
        targetPriority = 3;
    } else if (table.width() < minWidth) {
        targetPriority = 0;
    } else {
        targetPriority = Math.ceil(3 - (resizeWidth - table.width()) / increment);
    }
    if (targetPriority >= currentPriority) {
        for (var i = currentPriority + 1; i <= targetPriority; i++) {
            table.find('colgroup.priority-' + i).each(function (index, domVal) {
                var val = $(domVal);
                table.find('td:nth-child(' + (val.index() + 1) + ')').removeClass('collapsed').removeClass('short');
                table.find('th:nth-child(' + (val.index() + 1) + ')').removeClass('collapsed');
            });
        }
    } else {
        for (i = currentPriority; i > targetPriority; i--) {
            table.find('colgroup.priority-' + i).each(function (index, domVal) {
                var val = $(domVal);
                if (val.hasClass('collapsible')) {
                    table.find('td:nth-child(' + (val.index() + 1) + ')').addClass('collapsed');
                    table.find('th:nth-child(' + (val.index() + 1) + ')').addClass('collapsed');
                } else if (val.hasClass('shortable')) {
                    table.find('td:nth-child(' + (val.index() + 1) + ')').addClass('short');
                }
            });
        }
    }
    currentPriority = targetPriority;
};

$(window).on('resize', collapseColumns);
collapseColumns();