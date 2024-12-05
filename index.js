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
// });


const path = require('path')
const escpos = require('escpos')
escpos.USB = require('escpos-usb')
const device = new escpos.USB();
const options = {encoding: "GB18030"}
const printer = new escpos.Printer(device, options)
const bodyParser = require('body-parser')
const app = require('express')()
const http = require('http').Server(app)
const cors = require('cors')
const config = require('./config.json');

app.use(cors())
app.use(bodyParser.json())
const port = config.port;

const tux = path.join(__dirname, 'logo.png');




app.post('/print', (req, res) => {
    res.json(
        {status: 'success'}
    )
    // print(req.body)
    console.dir("response", req.body);
});

http.listen(port, () => {
    console.log(`Printer: ${config.baseurl}${port}`);
});

// const print = (data) => {
//     escpos.Image.load(tux, function (image) {
//         device.open(function () {
//             printer
//                 .align('ct')
//                 .image(image, 's8')
//                 .then(() => {
//                     printer.font('a')
//                         .style('NORMAL')
//                         .align('ct')
//                         .size(0, 0)
//                     const truncate = (text, maxLength) =>
//                         text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text.padEnd(maxLength, " ");
//                     const columnWidths = {
//                         item: 18, // 16 characters for "Item"
//                         // 4 characters for "SZ"
//                         qty: 4,   // 4 characters for "QTY"
//                         price: 10, // 9 characters for "Price"
//                         value: 10, // 9 characters for "Value"
//                     }
//                     printer
//                         .font("a")
//                         .align("ct")
//                         .text(data?.company_name)
//                         .size(0, 0)
//                         .text(data?.address)
//                         .text(`Phone: ${data?.phone_no}`)
//                         .text(`Vat Reg No: ${data?.vat_no}`)
//                         .text("-".repeat(42))
//                         .text(`Invoice No: ${data?.Invoice_no}`)
//                         .text(`Service By : ${data?.service_by}`)
//                         .text(data?.date)
//                         .text("-".repeat(42))
//                         .text(
//                             truncate("Item", columnWidths.item) +
//                             // truncate("SZ", columnWidths.size) +
//                             truncate("QTY", columnWidths.qty) +
//                             truncate("Price", columnWidths.price) +
//                             truncate("Value", columnWidths.value)
//                         );
//                     data.items.forEach((row) => {
//                         printer.text(
//                             truncate(row?.name, columnWidths.item) +
//                             truncate(row?.quantity, columnWidths.qty) +
//                             truncate(row?.price, columnWidths.price) +
//                             truncate(row?.total, columnWidths.value)
//                         );
//                     })
//                     printer
//                         .text("-".repeat(42))
//                         .tableCustom(
//                             [
//                                 {text: "Amount:", align: "RIGHT", width: 0.60},
//                                 {text: data?.total_amount, align: "RIGHT", width: 0.30}
//                             ]
//                         )
//                         .tableCustom(
//                             [
//                                 {text: `Discount(${data?.discount_per}%):`, align: "RIGHT", width: 0.60},
//                                 {text: `${data?.dicount_amount}`, align: "RIGHT", width: 0.30}
//                             ]
//                         )
//                         .text("-".repeat(42))
//                         .tableCustom(
//                             [
//                                 {text: "Discounted Amount:", align: "RIGHT", width: 0.60},
//                                 {text: data.nit_total, align: "RIGHT", width: 0.30}
//                             ]
//                         )
//                         .text("-".repeat(42))
//                         .tableCustom(
//                             [
//                                 {text: "Cash:", align: "RIGHT", width: 0.60},
//                                 {text: data?.customer_amount, align: "RIGHT", width: 0.30}
//                             ]
//                         )
//                         .tableCustom(
//                             [
//                                 {text: "Change Due:", align: "RIGHT", width: 0.60},
//                                 {text: data?.change_due, align: "RIGHT", width: 0.30}
//                             ]
//                         )
//
//                         .text("-".repeat(42))
//                         .align('lt')
//                     data.messages.forEach((row) => {
//                         printer.text(row.message);
//                     });
//                     printer
//                         .text('')
//                         .text('')
//                         .align('ct')
//                         .text("Thank You")
//                         .text(`Facebook: ${data.company_name}`)
//                         .text(`Tips: ${data?.tips}`)
//                         .cut()
//                         .close()
//                     // printer.cut().close();
//                 });
//         });
//     });
// }
