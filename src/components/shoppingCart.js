import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import { products } from '../utils/productData';
import "./shoppingCart.css"
import "../App.css"
import { CountContext } from '../App';

// import { Count } from '../App'
// import { useContext } from 'react'

function ShoppingCart() {
  // const count = useContext()
  const countState = useContext(CountContext)
  console.log(countState.countState.cart)
  const cartstate = countState.countState.cart
  console.log(cartstate)
  console.log(cartstate.length)
  let total = 0
  {
    cartstate.forEach(element => {
      total = total + element.props.newPrice * element.qty
      console.log(total)
    })
  }
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="shopcard shopcard-registration shopcard-registration-2" >
              <div className="shopcard-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cartstate.length} items</h6>
                      </div>
                      <hr className="my-4" />

                      {
                        //mapping the cart items into shopping page
                        cartstate.map((item) => {

                          return (
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">Shirt</h6>
                                <h6 className="text-black mb-0">{item.props.title}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                  className="form-control form-control-sm" />

                                <button className="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">Rs {item.props.newPrice}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a onClick={() => countState.countDispatch(
                                  {
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                  }
                                )} href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                              </div>

                              <hr className="my-4" />
                            </div>
                          )

                        })

                      }



                      {
                        // <div className="row mb-4 d-flex justify-content-between align-items-center">
                        //   <div className="col-md-2 col-lg-2 col-xl-2">
                        //     <img
                        //       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                        //       className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        //   </div>
                        //   <div className="col-md-3 col-lg-3 col-xl-3">
                        //     <h6 className="text-muted">Shirt</h6>
                        //     <h6 className="text-black mb-0">Cotton T-shirt</h6>
                        //   </div>
                        //   <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        //     <button className="btn btn-link px-2"
                        //       onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        //       <i className="fas fa-minus"></i>
                        //     </button>

                        //     <input id="form1" min="0" name="quantity" value="1" type="number"
                        //       className="form-control form-control-sm" />

                        //     <button className="btn btn-link px-2"
                        //       onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        //       <i className="fas fa-plus"></i>
                        //     </button>
                        //   </div>
                        //   <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        //     <h6 className="mb-0">€ 44.00</h6>
                        //   </div>
                        //   <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        //     <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                        //   </div>
                        // </div>

                        // <hr className="my-4" />

                        // <div className="row mb-4 d-flex justify-content-between align-items-center">
                        //   <div className="col-md-2 col-lg-2 col-xl-2">
                        //     <img
                        //       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                        //       className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        //   </div>
                        //   <div className="col-md-3 col-lg-3 col-xl-3">
                        //     <h6 className="text-muted">Shirt</h6>
                        //     <h6 className="text-black mb-0">Cotton T-shirt</h6>
                        //   </div>
                        //   <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        //     <button className="btn btn-link px-2"
                        //       onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        //       <i className="fas fa-minus"></i>
                        //     </button>

                        //     <input id="form1" min="0" name="quantity" value="1" type="number"
                        //       className="form-control form-control-sm" />

                        //     <button className="btn btn-link px-2"
                        //       onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        //       <i className="fas fa-plus"></i>
                        //     </button>
                        //   </div>
                        //   <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        //     <h6 className="mb-0">€ 44.00</h6>
                        //   </div>
                        //   <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        //     <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                        //   </div>
                        // </div>
                      }



                      <div className="pt-5">
                        <h6 className="mb-0"><a href="#!" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase"> Total Items {cartstate.length}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Examplea2">Enter your code</label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>Rs {total}
                        </h5>
                      </div>
                      <button type="button" className="btn btn-outline-primary">Primary</button>
                      <button type="button" className="btn btn-primary btn-lg">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart