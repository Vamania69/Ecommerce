import React from 'react'
import "../components/order.css"
function Order() {
  return (
    <section className='order-container d-flex w-100 mt-6 justify-content-center align-item-center' >
      <div className="container  mt-4 py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="cardOrder card-stepper text-black" >

              <div className="cardOrder-body p-5">

                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div>
                    <h5 className="mb-0">INVOICE <span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
                  </div>
                  <div className="text-end">
                    <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                    <p className="mb-0">USPS <span className="font-weight-bold">234094567242423422898</span></p>
                  </div>
                </div>

                <ul id="progressbar-2" className="d-flex justify-content-between  mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                  <li className="step0 active text-center order-icons" id="step1"></li>
                  <li className="step0 active text-center" id="step2"></li>
                  <li className="step0 active text-center" id="step3"></li>
                  <li className="step0 text-muted text-end" id="step4"></li>
                </ul>

                <div className="d-flex justify-content-between order-icons">
                  <div className="d-lg-flex align-items-center">
                    <i className="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Processed</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <i className="fas fa-box-open fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Shipped</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <i className="fas fa-shipping-fast fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">En Route</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <i className="fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Arrived</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Order