import { Schema, model } from "mongoose";

const paypalPaymentSchema = new Schema({
    id: { type: String, trim: true },
    intent: { type: String, trim: true },
    status: { type: String, trim: true },
    purchase_units: [
        {
            reference_id: { type: String, trim: true },
            amount: {
                currency_code: { type: String, trim: true },
                value: { type: String, trim: true },
            },
            payee: {
                email_address: { type: String, trim: true },
                merchant_id: { type: String, trim: true },
            },
            shipping: {
                name: {
                    full_name: { type: String, trim: true },
                },
                address: {
                    address_line_1: { type: String, trim: true },
                    admin_area_2: { type: String, trim: true },
                    admin_area_1: { type: String, trim: true },
                    postal_code: { type: String, trim: true },
                    country_code: { type: String, trim: true },
                },
            },
            payments: {
                captures: [
                    {
                        id: { type: String, trim: true },
                        status: { type: String, trim: true },
                        amount: {
                            currency_code: { type: String, trim: true },
                            value: { type: String, trim: true },
                        },
                        final_capture: Boolean,
                        seller_protection: {
                            status: { type: String, trim: true },
                            dispute_categories: [{ type: String }],
                        },
                        create_time: { type: String, trim: true },
                        update_time: { type: String, trim: true },
                    },
                ],
            },
        },
    ],
    payer: {
        name: {
            given_name: { type: String, trim: true },
            surname: { type: String, trim: true },
        },
        email_address: { type: String, trim: true },
        payer_id: { type: String, trim: true },
        address: {
            country_code: { type: String, trim: true },
        },
    },
    create_time: { type: String, trim: true },
    update_time: { type: String, trim: true },
    links: [
        {
            href: { type: String, trim: true },
            rel: { type: String, trim: true },
            method: { type: String, trim: true },
        },
    ],
});

const PaypalPaymentsModel = model("paypal-payments", paypalPaymentSchema);
export default PaypalPaymentsModel;
