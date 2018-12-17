import moment from 'moment';


export const numberWithCommas = (x) => {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatCurrency = (x) => {

    return "PKR " + numberWithCommas(x);
}

export const dateFormats = {
    f1: "MMM Do, YY"//Do MMM, YYYY"
}
export const formatDate = (date, format) => {
    return moment(date).format(format ? format : "MMM Do YY, h:mm a");
}

export const getInitials = (name, delimeter = ' ') => {

    if (name) {

        var array = name.split(delimeter);

        switch (array.length) {

            case 1:

                return array[0].charAt(0).toUpperCase();

                break;
            default:

                return array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
        }

    }
    return false;


}

function GetLastWeekStart() {
    var today = moment();
    var daystoLastSunday = 0 - (1 - today.isoWeekday()) + 8;

    var lastSunday = today.subtract('days', daystoLastSunday);

    return lastSunday;
}


function GetLastWeekEnd() {
    var lastSunday = GetLastWeekStart();
    var lastSaturday = lastSunday.add('days', 6);

    return lastSaturday;
}

function compareDate(d1, d2) {
    return formatDate(d1, dateFormats.f1) == formatDate(d2, dateFormats.f1)
}
function isLastWeek(startDate, endDate) {
    return compareDate(startDate, GetLastWeekStart()) && compareDate(endDate, GetLastWeekEnd())
}
function isThisMonth(startDate, endDate) {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);

    firstDay = moment(firstDay)
    lastDay = moment(lastDay)
    return compareDate(startDate, firstDay) && compareDate(endDate, lastDay)

}
function isThisMonth(startDate, endDate) {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);

    firstDay = moment(firstDay)
    lastDay = moment(lastDay)
    return compareDate(startDate, firstDay) && compareDate(endDate, lastDay)

}
function isLastMonth(startDate, endDate) {
    let lastMonthStartDate = moment().subtract(1, 'months').startOf('month')
    let lastMonthEndDate = moment().subtract(1, 'months').endOf('month')
    return compareDate(startDate, lastMonthStartDate) && compareDate(endDate, lastMonthEndDate)
}
export const formatDateRange = (startDate, endDate) => {
    startDate = moment(startDate);
    endDate = moment(endDate);
    let dayDifferenceCurrentDate = moment().diff(startDate, 'days');
    let dayDiffernce = endDate.diff(startDate, 'days');


    if (isLastWeek(startDate, endDate)) {
        return 'Last Week';
    }
    if (isThisMonth(startDate, endDate)) {
        return 'This Month';
    }
    if (isLastMonth(startDate, endDate)) {
        return 'Last Month';
    }

    if (dayDiffernce == 6 && startDate.weekday() == 0 && endDate.weekday() == 6 && moment().isBetween(startDate, endDate)) {
        return "This Week";
    }
    switch (dayDifferenceCurrentDate) {
        case 0: return "Today"
        case 1: return "Yesterday"
        case 3: return "Last 3 Days"
        case 7: return "Last 7 Days"
        case 30: return "Last 30 Days"
        default: {

            return `${formatDate(startDate, dateFormats.f1)} - ${formatDate(endDate, dateFormats.f1)}`
        }
    }
}
export const setDefaultTime = (date, dayEnd) => {

    if (dayEnd) {
        date.setHours(23);
        date.setMinutes(59);
    }
    else {
        date.setHours(0);
        date.setMinutes(0);
    }

}


export const getLastThreeDays = () => {
    return { from: moment().add(-30, 'days').toDate(), to: new Date() }
}

export const camelize = (text) => {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
}

export const calculatePages = (totalRecord, pageSize) => {

    // console.log('page size', totalRecord, pageSize, Math.ceil(totalRecord / pageSize));
    return Math.ceil(totalRecord / pageSize);

}
