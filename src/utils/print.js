//  import getOutput, { } from './reciept-format.js'  //import like this to call function
//  [getOutput(params)] call like this in print function
// format variables
function getOutput(restaurantName, createdAt, printedAt, orderNumber, devliveryPerson, name, phone, address, order, contactUs, subtotal, deliveryCharges, discountPercent, totalAmount, GST) {
    console.log({ restaurantName, createdAt, printedAt, orderNumber, devliveryPerson, name, phone, address, order, contactUs, subtotal, deliveryCharges, discountPercent, totalAmount, GST })


    const currency = 'PKR' //default currency
    //predefined variables
    const reciept = []
    const pageWidth = 48
    const iQ = 28
    const qP = 4
    const iQTotal = 30
    const qtyLength = 3
    const rightWidth = 13
    const iQWidth = 32
    const priceWidth = 5
    const currencyWidth = 3


    //pre defined values
    let headerStr = 'Item' + ' '.repeat(iQ) + 'Qty' + ' '.repeat(qP) + 'Price'
    headerStr += ' '.repeat(pageWidth - headerStr.length)

    //////////////////////////////////////////////////////
    // order variables

    restaurantName = '\x1B' + '\x61' + '\x31' + '\x1B' + '\x45' + '\x0D' + restaurantName + '\x1B' + '\x45' + '\x0A'

    ///////////////////////////////////////////////////

    function formatCentre(inputStr) {
        let start = Math.floor(+((pageWidth - inputStr.length) / 2))
        return ' '.repeat(start) +
            inputStr +
            ' '.repeat(pageWidth - start - inputStr.length)
    }

    function formatWithColon(inputLabel, numberOfSpaces, inputStr) {
        let output = inputLabel + ':' + ' '.repeat(numberOfSpaces) + inputStr
        if (output.length <= pageWidth) return output + ' '.repeat(pageWidth - output.length)
        else {
            return formatLineBreak(output, pageWidth)
        }
    }

    function formatLineBreak(input, size) {
        input = input + ' '.repeat(size - (input.length % size))
        let re = new RegExp('.{1,' + size + '}', 'g');
        return input.match(re);
    }

    function formatPriceLine(title, qty, price) {
        let priceline = '';
        if (qty && price) {
            priceline = title + ' '.repeat(iQWidth - iQTotal) +
                ' '.repeat(qtyLength - (qty.toString()).length) + qty +
                ' '.repeat(qP) +
                currency + ' ' + ' '.repeat(priceWidth - price.toString().length) + price
        }
        else
            priceline += title

        priceline += (' '.repeat(pageWidth - priceline.length))

        return priceline
    }

    function formatOrderItem(orderItem) {

        let output = [];

        let orderLines = formatLineBreak((orderItem.variation ? orderItem.variation.name + (orderItem.variation.options ? '-' + orderItem.variation.options[0].title + ' ' : ' ') : orderItem.food.item.title), iQTotal)

        //first line of order which contains name,quantity,price of order
        output.push(formatPriceLine(orderLines[0], orderItem.counter, orderItem.variation ? orderItem.variation.options[0].price : orderItem.price))

        //push all other lines of order e.g addons variations
        for (let i = 1; i < orderLines.length; i++) {
            output.push(formatPriceLine(orderLines[i]))
        }
        if (orderItem.addons) {
            orderItem.addons.forEach(function (addon) {
                addon.options.forEach((option, index) => {
                    let addonStrArr = formatLineBreak(`+ ${option.title}`, iQTotal)
                    // console.log(addonStrArr)
                    if (addonStrArr.length) {
                        addonStrArr.forEach(function (addonLine) {
                            output.push(formatPriceLine(addonLine))
                        })
                    }

                })
            })
        }
        return output
    }

    function formatOrder(orderList) {
        let output = []
        orderList.forEach(function (order) {
            output.push(...(formatOrderItem(order)))
        })
        return output
    }

    function formatRight(val, label, currency) {
        let formattedStr = ' '.repeat(pageWidth - rightWidth - label.length)
            + label
            + '    '
            + currency + ' '.repeat(currencyWidth - currency.length) + ' '
        formattedStr += (' '.repeat(priceWidth - val.toString().length) + val.toString())
        return formattedStr
    }

    function pushInReciept(input) {
        if (typeof input == 'string')
            reciept.push(input.split(''))
        else
            input.forEach(item => {
                reciept.push(item.split(''))
            })
    }



    let restaurantStr = formatCentre(restaurantName)
    pushInReciept(restaurantStr)
    pushInReciept(' '.repeat(pageWidth)) //empty line after restaurant name
    let createdAtStr = formatWithColon('Order Time', 1, createdAt)
    pushInReciept(createdAtStr)
    let printedAtStr = formatWithColon('Printed Time', 1, printedAt)
    pushInReciept(printedAtStr)
    let orderNumberStr = formatWithColon('Order Number', 1, orderNumber)
    pushInReciept(orderNumberStr)
    if (devliveryPerson) {
        let devliveryPersonStr = formatWithColon('Delivery Person', 1, devliveryPerson)
        pushInReciept(devliveryPersonStr)
    }
    let nameStr = formatWithColon('Name', 1, name)
    pushInReciept(nameStr)
    let phoneStr = formatWithColon('Phone', 1, phone)
    pushInReciept(phoneStr)
    let addressStr = formatWithColon('Address', 1, address)
    pushInReciept(addressStr)
    pushInReciept(' '.repeat(pageWidth)) // empty line after address
    pushInReciept(headerStr)
    pushInReciept('-'.repeat(pageWidth)) //seperator after order header 
    let orderStr = formatOrder(order)
    pushInReciept(orderStr)
    pushInReciept('-'.repeat(pageWidth)) //seperator after order items
    pushInReciept(' '.repeat(pageWidth)) //empty line after order items
    pushInReciept(formatRight(subtotal, 'Sub Total', 'PKR')) //subtotal,deliveryCharges,discountPercent,totalAmount,GST
    pushInReciept(' '.repeat(pageWidth - pageWidth / 2) + '-'.repeat(pageWidth - pageWidth / 2 + (pageWidth % 2)))  //seperator after sub total
    pushInReciept(formatRight(deliveryCharges, 'Delivery Charges', 'PKR'))
    pushInReciept(' '.repeat(pageWidth - pageWidth / 2) + '-'.repeat(pageWidth - pageWidth / 2 + (pageWidth % 2)))
    pushInReciept(formatRight(GST, 'GST', 'PKR'))
    pushInReciept(' '.repeat(pageWidth - pageWidth / 2) + '-'.repeat(pageWidth - pageWidth / 2 + (pageWidth % 2)))
    pushInReciept(formatRight(discountPercent, 'Discount', '%'))
    pushInReciept(' '.repeat(pageWidth - pageWidth / 2) + '-'.repeat(pageWidth - pageWidth / 2 + (pageWidth % 2)))
    pushInReciept(formatRight(totalAmount, 'Total', 'PKR'))
    pushInReciept(' '.repeat(pageWidth)) // empty line total price
    pushInReciept('_'.repeat(pageWidth)) // empty line 
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(formatCentre('Thank You for using services'))
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(formatCentre('Powered by fikifoo'))
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(formatCentre('For feedback: Contact Us: ' + contactUs))
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept(' '.repeat(pageWidth)) // empty line 
    pushInReciept('\x1B\x69'+' '.repeat(pageWidth-2)) // cut paper
   
    
    //replace spaces with string given
    //put in given string at the end of each line

    // let replaceSpace = ' '
    let endStr = '\x0A'
    let outputStr = ''

    // for (let i in reciept) {
    //     reciept[i].push(endStr)
    // }
    reciept.forEach(function (item) {
        item.push(endStr)
        outputStr += `${(item.join(''))}`
    })
    console.log(outputStr)
    //outputStr + '\x1B\x69' //cut paper
    return outputStr
}

export default getOutput

