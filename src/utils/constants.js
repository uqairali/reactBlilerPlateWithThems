
export const appTitle = "Fikifoo Restaurant Panel"
export const brand = "fikifoo"
export const getTabTitle = (tab) => {
    return `${(tab ? tab + ' | ' : '')} ${appTitle}`;
}
export const OrderStatus = {
    PendingApproval: "Pending Approval",
    BeingCooked: "Being Cooked",
    BeingDelivered: "Being Delivered",
    PendingPayment: "Pending Payment",
    Cancelled: "Cancelled",
    Completed: "Completed",

}

export const enumBudget = (selected) => {

    let b = {
        "Low": false,
        "Average": false,
        "High": false,
        "Elite": false
    }
    if (selected) { b[selected] = true; }
    return b;
}
export const enumReviewStatus = {
    'Published': 'Published',
    'Rejected': 'Rejected',
    'Reported': 'Reported',
    'Deleted': 'Deleted'
}
// export const getReviewRatingByType = (rating, type) => { //type= food, restaurant

//     let ratingObj = { overall: rating['overall'] };

//     if (type.toLowerCase() == "restaurant") {
//         ratingObj.service = rating["service"]
//         ratingObj.ambience = rating["ambience"]

//     }
//     else {
//         ratingObj.hygiene = rating["hygiene"]
//         ratingObj.taste = rating["taste"]
//     }
//     return ratingObj

// }

export const time =
    [
        { value: 5, label: "05" },
        { value: 10, label: "10" },
        { value: 20, label: "20" },
        { value: 25, label: "25" },
        { value: 30, label: "30" },
        { value: 35, label: "35" },
        { value: 40, label: "40" },
        { value: 45, label: "45" },
        { value: 50, label: "50" },
        { value: 55, label: "55" },
        { value: 60, label: "60" },
    ]

export const pageSize = 10;
export const ReviewsPageSize = 10;
export const maxRating = "5.0";
export const messages = {
    pendingApprovalSuccess: "Order approved successfully",
    beingCookedApproveSuccess: "Order being cooked successfully",
    beingDeliveredApproveSuccess: "Order being delivered successfully",
    pendingPaymentApproveSuccess: "Pending payment approved successfully",
    orderCancelledSuccess: "Order cancelled successfully",
    OrderUpdateFail: "Something went wrong"
}
export const siteInfo = {
    email: "care@fikifoo.com"
}


