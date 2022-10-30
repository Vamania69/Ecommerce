import React from 'react'
import '../components/checkout.css'
import { Link } from 'react-router-dom'
function checkout() {


    return (
        <>

            <div class="checkoutContainer d-flex justify-content-center align-item-center  mb-5">
                <div class="row-checkout row g-3">
                    <div class="col-md-6">
                        <span>Payment Method</span>
                        <div class="checkoutCard">
                            <div class="accordion" id="accordionExample">
                                <div class="checkoutCard">
                                    <div class="checkoutCard-header p-0" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span>Paypal</span>
                                                    <img src="https://i.imgur.com/7kQEsHU.png" width="30" />
                                                </div>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="checkoutCard-body">
                                            <input type="text" class="form-control" placeholder="Paypal email" />
                                        </div>
                                    </div>
                                </div>

                                <div class="checkoutCard">
                                    <div class="checkoutCard-header p-0">
                                        <h2 class="mb-0">
                                            <button class="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span>Credit checkoutCard</span>
                                                    <div class="icons">
                                                        <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                                                        <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                                                        <img src="https://i.imgur.com/35tC99g.png" width="30" />
                                                        <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="checkoutCard-body payment-checkoutCard-body">

                                            <span class="font-weight-normal checkoutCard-text">Card Number</span>
                                            <div class="input">

                                                <i class="fa fa-credit-checkoutCard"></i>
                                                <input type="text" class="form-control" placeholder="0000 0000 0000 0000" />

                                            </div>

                                            <div class=" mt-3 mb-3">

                                                <div class="col-md-6">

                                                    <span class="font-weight-normal checkoutCard-text">Expiry Date</span>
                                                    <div class="input">

                                                        <i class="fa fa-calendar"></i>
                                                        <input type="text" class="form-control" placeholder="MM/YY" />

                                                    </div>

                                                </div>


                                                <div class="col-md-6">

                                                    <span class="font-weight-normal checkoutCard-text">CVC/CVV</span>
                                                    <div class="input">

                                                        <i class="fa fa-lock"></i>
                                                        <input type="text" class="form-control" placeholder="000" />

                                                    </div>

                                                </div>


                                            </div>

                                            <span class="text-muted certificate-text"><i class="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-6">
                        <span>Summary</span>

                        <div class="checkoutCard">

                            <div class="d-flex justify-content-between p-3">

                                <div class="d-flex flex-column">

                                    <span>Pro(Billed Monthly) <i class="fa fa-caret-down"></i></span>
                                    <Link href="#" class="billing">Save 20% with annual billing</Link>

                                </div>

                                <div class="mt-1">
                                    <sup class="super-price">$9.99</sup>
                                    <span class="super-month"></span>
                                </div>

                            </div>

                            <hr class="mt-0 line" />

                            <div class="p-3">

                                <div class="d-flex justify-content-between mb-2">

                                    <span>Refferal Bonouses</span>
                                    <span>-$2.00</span>

                                </div>

                                <div class="d-flex justify-content-between">

                                    <span>Vat <i class="fa fa-clock-o"></i></span>
                                    <span>-20%</span>

                                </div>


                            </div>

                            <hr class="mt-0 line" />


                            <div class="p-3 d-flex justify-content-between">

                                <div class="d-flex flex-column">

                                    <span>Today you pay(US Dollars)</span>
                                    <small>After 30 days $9.59</small>

                                </div>
                                <span>$0</span>



                            </div>


                            <div class="p-3">

                                <button class="btn btn-primary btn-block free-button">Place Order</button>
                                <div class="text-center">
                                    <Link href="#">Have a promo code?</Link>
                                </div>

                            </div>




                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default checkout