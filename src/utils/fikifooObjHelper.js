import { formatCurrency,formatDate } from "./helpers";
import moment from 'moment';


const deconstructOrderDetails = function (orderDetails) {
    
    if (!orderDetails) return {}
    const dOrderDetails = {
        orderNumber: orderDetails.orderNumber,
        specialInstructions: orderDetails.specialInstructions,
        name: orderDetails.user.name,
        contact: orderDetails.contact,
        fullAddress: orderDetails.deliveryAddress.location.fullAddress,
        house: orderDetails.deliveryAddress.location.house,
        street: orderDetails.deliveryAddress.location.street,
        createdAt: formatDate(orderDetails.deliveryAddress.createdAt),
        orderType: orderDetails.orderType,
        status: orderDetails.status,
        cookingTime: orderDetails.statusDetails.cookingTime,
        paymentMethod: orderDetails.paymentMethod,
        subTotal: orderDetails.subTotal,
        gst: orderDetails.gst,
        deliveryCharges: orderDetails.deliveryCharges,
        discount: orderDetails.additional.discount,
        additionalServices: orderDetails.additional.additionalServices,
        orders: orderDetails.orders,
        deliveryPerson:orderDetails.deliveryPerson
    };
 
    return dOrderDetails;
}

const fetchRestaurantName = function (orders) {
    try {
        return orders[0].restaurant.item.title; //pain? sorry about that, thats how api sends the data
    } catch (e) {
        return "N/A";
    }
}
const fetchVariationDetails = function (variation) {

    try {
        const { title, price } = variation.options[0];
        return { title, price }
    } catch (e) {
        console.log(e)
        return null;
    }
}
const calculateDiscount = function (subTotal, discount) {

    return subTotal - (Number(subTotal) * Number(discount) / 100)


}
const calculateAdditionalServicesPrice = function (additionalServices) {
    let sum = 0;
    if (additionalServices) {
        additionalServices.forEach((item, index) => {
            sum += item.price;
        });
    }

    return sum;

}
const calculateGSTCharges = function (total, gstPercent) {
    return (total * gstPercent) / 100;
}
const formatPriceCalculator = function (computedPrice) {
    return {
        subTotal: formatCurrency(computedPrice.subTotal),
        discount: computedPrice.discount + '%',
        discountedSubTotal: formatCurrency(computedPrice.discountedSubTotal),
        deliveryCharges: formatCurrency(computedPrice.deliveryCharges),
        GST: formatCurrency(computedPrice.GST),
        total: formatCurrency(computedPrice.total)
    }
}
const PriceCalculator = function (subTotal, additionalServices, discount = 0, deliveryCharges = 0, gstPercent, applyFormating) {
    
    gstPercent = isNaN(Number(gstPercent)) ? 0 : gstPercent;
    let additionServicesTotal = calculateAdditionalServicesPrice(additionalServices);
    
    subTotal = subTotal + additionServicesTotal;
    let discountedSubTotal = calculateDiscount(subTotal, discount);
    let GST = calculateGSTCharges(discountedSubTotal, gstPercent);
    let total = discountedSubTotal + deliveryCharges + GST;

    let result = {
        subTotal: Math.ceil(subTotal),
        discount: Math.ceil(discount),
        discountedSubTotal: Math.ceil(discountedSubTotal),
        deliveryCharges: Math.ceil(deliveryCharges),
        GST: Math.ceil(GST),
        total: Math.ceil(total)
    };

    if (applyFormating) {
        result = formatPriceCalculator(result);
    }

    return result

}

export {
    fetchRestaurantName,
    fetchVariationDetails,
    calculateDiscount,
    calculateAdditionalServicesPrice,
    calculateGSTCharges,
    PriceCalculator,
    deconstructOrderDetails

}
