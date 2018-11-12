/**
 * Enhanced Ecommerce ProductActionEnum
 *
 * Used by `ProductAction` when describing the type of product action. The possible values (numbers) are:
 *
 * * Detail = 1,
 * * Click = 2,
 * * Add = 3,
 * * Remove = 4,
 * * Checkout = 5,
 * * CheckoutOption = 6,
 * * Purchase = 7,
 * * Refund = 8
 *
 * @export
 * @enum {number}
 */
export var ProductActionEnum;
(function (ProductActionEnum) {
    ProductActionEnum[ProductActionEnum["Detail"] = 1] = "Detail";
    ProductActionEnum[ProductActionEnum["Click"] = 2] = "Click";
    ProductActionEnum[ProductActionEnum["Add"] = 3] = "Add";
    ProductActionEnum[ProductActionEnum["Remove"] = 4] = "Remove";
    ProductActionEnum[ProductActionEnum["Checkout"] = 5] = "Checkout";
    ProductActionEnum[ProductActionEnum["CheckoutOption"] = 6] = "CheckoutOption";
    ProductActionEnum[ProductActionEnum["Purchase"] = 7] = "Purchase";
    ProductActionEnum[ProductActionEnum["Refund"] = 8] = "Refund";
})(ProductActionEnum || (ProductActionEnum = {}));
/**
 * Enhanced Ecommerce Product
 *
 * Used by `HitPayload` when populating product actions or impressions
 *
 * @example
 * const product = {
 *   id: "P12345",
 *   name: "Android Warhol T-Shirt",
 *   category: "Apparel/T-Shirts",
 *   brand: "Google",
 *   variant: "Black",
 *   price: 29.2,
 *   quantity: 1,
 *   couponCode: "APPARELSALE"
 * };
 * @interface Product
 * @param {string} id
 * @param {string} name
 * @param {string} category (Optional)
 * @param {string} brand (Optional)
 * @param {string} variant (Optional)
 * @param {number} price (Optional)
 * @param {string} couponCode (Optional)
 * @param {number} quantity (Optional)
 */
/**
 * Enhanced Ecommerce Transaction
 *
 * Used by `ProductAction` when populating describing a purchase/transaction
 * @example
 * const transaction = {
 *   id: "T12345",
 *   affiliation: "Google Store - Online",
 *   revenue: 37.39,
 *   tax: 2.85,
 *   shipping: 5.34,
 *   couponCode: "SUMMER2013"
 * };
 * @interface Transaction
 * @param {string} id
 * @param {string} affiliation (Optional)
 * @param {number} revenue (Optional - but not really)
 * @param {number} tax (Optional)
 * @param {number} shipping (Optional)
 * @param {string} couponCode (Optional)
 */
/**
 * Enhanced Ecommerce Product Action
 *
 * Used by `HitPayload` when describing a product action
 * @example
 * const productAction = {
 *   transaction,
 *   action: 7 // Purchase action, see ProductActionEnum
 * }
 * @example
 * const productAction = {
 *   action: 3 // Add action, see ProductActionEnum
 * }
 * @interface ProductAction
 * @param {ProductActionEnum} action
 * @param {Transaction} transaction (Optional)
 * @param {number} checkoutStep (Optional)
 * @param {string} checkoutOption (Optional)
 * @param {string} productActionList (Optional)
 * @param {string} productListSource (Optional)
 */
