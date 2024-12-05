
// const escpos = require('escpos');
// escpos.USB = require('escpos-usb');
// const device = new escpos.USB();
// const options = {encoding: "GB18030" /* default */}
// const printer = new escpos.Printer(device, options);
//
// device.open(function (error) {
//     printer
//         .font('a')
//         .style('NORMAL')
//         .align('ct')
//         .size(0, 0)
//     const truncate = (text, maxLength) =>
//         text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text.padEnd(maxLength, " ");
//     const columnWidths = {
//         item: 16, // 16 characters for "Item"
//         size: 4,  // 4 characters for "SZ"
//         qty: 4,   // 4 characters for "QTY"
//         price: 9, // 9 characters for "Price"
//         value: 9, // 9 characters for "Value"
//     }
//     printer
//         .font("a")
//         .align("ct")
//         .text("Selopia Invoice")
//         .size(0, 0)
//         .text("Banglamotor, Dhaka")
//         .text('Phone: 01795320105')
//         .text('Vat Reg No: 11115558888')
//         .text("-".repeat(42))
//         .text('Invoice No: 4584215')
//         .text('Service By : Ariful Islam')
//         .text('Sun Dec 12 2024 8.08 PM')
//         .text("-".repeat(42))
//         .text(
//             truncate("Item", columnWidths.item) +
//             truncate("SZ", columnWidths.size) +
//             truncate("QTY", columnWidths.qty) +
//             truncate("Price", columnWidths.price) +
//             truncate("Value", columnWidths.value)
//         );
//     // Table Rows
//     const rows = [
//         ["Shirt", "M", "05", "1500", "7500"],
//         ["Jeans", "L", "02", "2500", "5000"],
//         ["Jacket", "XL", "01", "5500", "5500"],
//     ]
//     rows.forEach((row) => {
//         printer.text(
//             truncate(row[0], columnWidths.item) +
//             truncate(row[1], columnWidths.size) +
//             truncate(row[2], columnWidths.qty) +
//             truncate(row[3], columnWidths.price) +
//             truncate(row[4], columnWidths.value)
//         );
//     })
//     printer.text("-".repeat(42))
//         .tableCustom(
//             [
//                 {text: "Amount:", align: "RIGHT", width: 0.60},
//                 {text: "150000", align: "RIGHT", width: 0.30}
//             ]
//         )
//         .tableCustom(
//             [
//                 {text: "Discount(100%):", align: "RIGHT", width: 0.60},
//                 {text: "150000", align: "RIGHT", width: 0.30}
//             ]
//         )
//         .text("-".repeat(42))
//         // .text("-".repeat(42))
//         .tableCustom(
//             [
//                 {text: "Discount Amount:", align: "RIGHT", width: 0.60},
//                 {text: "1500", align: "RIGHT", width: 0.30}
//             ]
//         )
//         .tableCustom(
//             [
//                 {text: "Change Due:", align: "RIGHT", width: 0.60},
//                 {text: "150", align: "RIGHT", width: 0.30}
//             ]
//         )
//         .tableCustom(
//             [
//                 {text: "Cash:", align: "RIGHT", width: 0.60},
//                 {text: "150000", align: "RIGHT", width: 0.30}
//             ]
//         )
//         .text("-".repeat(42))
//         .align('lt')
//         .text('*Price Are Inclusive of Vat')
//         .text('*Good Once Sold Not Refundable')
//         .text('This Cash Memo must be Presented in Cash Exchange')
//         .text('')
//         .text('')
//         .align('ct')
//         .text("Thank You")
//         .text("Facebook: Lotto Bangladesh ")
//         .text("Tips: Walking just 10 minutes a day can reduce risk a heart attack")
//         .cut()
//         .close()
// });

//
// 'use strict';
// const path = require('path');
// const escpos = require('escpos');
// escpos.USB = require('escpos-usb');
// const device = new escpos.USB();
// const options = {encoding: "GB18030" /* default */}
// const printer = new escpos.Printer(device, options);
// const tux = path.join(__dirname, 'logo.png');
//
// escpos.Image.load(tux, function (image) {
//     device.open(function () {
//         printer.align('ct')
//             .image(image, 's8')
//             .then(() => {
//                 const currentTime = new Date(); // Get the current system time
//                 const timeString = currentTime.toLocaleString();
//                 printer
//                     .font('a')
//                     .style('NORMAL')
//                     .align('ct')
//                     .size(0, 0)
//                 const truncate = (text, maxLength) =>
//                     text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text.padEnd(maxLength, " ");
//                 const columnWidths = {
//                     item: 16, // 16 characters for "Item"
//                     size: 4,  // 4 characters for "SZ"
//                     qty: 4,   // 4 characters for "QTY"
//                     price: 9, // 9 characters for "Price"
//                     value: 9, // 9 characters for "Value"
//                 }
//                 printer
//                     .font("a")
//                     .align("ct")
//                     .text("Selopia Invoice")
//                     .size(0, 0)
//                     .text("Banglamotor, Dhaka")
//                     .text('Phone: 01795320105')
//                     .text('Vat Reg No: 11115558888')
//                     .text("-".repeat(42))
//                     .text('Invoice No: 4584215')
//                     .text('Service By : Ariful Islam')
//                     .text(timeString)
//                     .text("-".repeat(42))
//                     .text(
//                         truncate("Item", columnWidths.item) +
//                         truncate("SZ", columnWidths.size) +
//                         truncate("QTY", columnWidths.qty) +
//                         truncate("Price", columnWidths.price) +
//                         truncate("Value", columnWidths.value)
//                     );
//                 // Table Rows
//                 const rows = [
//                     ["Shirt", "M", "05", "1500", "7500"],
//                     ["Jeans", "L", "02", "2500", "5000"],
//                     ["Jacket", "XL", "01", "5500", "5500"],
//                 ]
//                 rows.forEach((row) => {
//                     printer.text(
//                         truncate(row[0], columnWidths.item) +
//                         truncate(row[1], columnWidths.size) +
//                         truncate(row[2], columnWidths.qty) +
//                         truncate(row[3], columnWidths.price) +
//                         truncate(row[4], columnWidths.value)
//                     );
//                 })
//                 printer.text("-".repeat(42))
//                     .tableCustom(
//                         [
//                             {text: "Amount:", align: "RIGHT", width: 0.60},
//                             {text: "150000", align: "RIGHT", width: 0.30}
//                         ]
//                     )
//                     .tableCustom(
//                         [
//                             {text: "Discount(100%):", align: "RIGHT", width: 0.60},
//                             {text: "150000", align: "RIGHT", width: 0.30}
//                         ]
//                     )
//                     .text("-".repeat(42))
//                     // .text("-".repeat(42))
//                     .tableCustom(
//                         [
//                             {text: "Discount Amount:", align: "RIGHT", width: 0.60},
//                             {text: "1500", align: "RIGHT", width: 0.30}
//                         ]
//                     )
//                     .tableCustom(
//                         [
//                             {text: "Change Due:", align: "RIGHT", width: 0.60},
//                             {text: "150", align: "RIGHT", width: 0.30}
//                         ]
//                     )
//                     .tableCustom(
//                         [
//                             {text: "Cash:", align: "RIGHT", width: 0.60},
//                             {text: "150000", align: "RIGHT", width: 0.30}
//                         ]
//                     )
//                     .text("-".repeat(42))
//                     .align('lt')
//                     .text('*Price Are Inclusive of Vat')
//                     .text('*Good Once Sold Not Refundable')
//                     .text('This Cash Memo must be Presented in Cash Exchange')
//                     .text('')
//                     .text('')
//                     .align('ct')
//                     .text("Thank You")
//                     .text("Facebook: Lotto Bangladesh ")
//                     .text("Tips: Walking just 10 minutes a day can reduce risk a heart attack")
//                     .cut()
//                     .close()
//                 // printer.cut().close();
//             });
//     });
//
// });












