import React, { useContext, useEffect } from 'react'
import { CountContext } from '../utils/context'
import { WishlistContext } from '../utils/wishlistContext'
import { Link } from 'react-router-dom'
export default function WishlistCart() {

    //wishlist state and method
    const wishlistContext = useContext(WishlistContext)
    const wishlist = wishlistContext.WishlistCount.cart

    //shoppingCart state and method
    const countContext = useContext(CountContext)
    const cart = countContext.countState.cart
    useEffect(() => { }, [cart])



    console.log(wishlist.length === 0, "hello")
    return (
        <>
            {
                wishlist.length === 0 ? (
                    <div className="container-fluid  mt-100">
                        <div className="">
                            <div className="col-md-12">
                                <div className="emptyCard">
                                    <div className="emptyCard-body ">
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <h3><strong>Your Cart is Empty</strong></h3>
                                            <h4>Add something to make me happy :</h4>
                                            <Link to="/" className="btn btn-primary cart-btn-transform m-3" >Continue Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center mt-9 row">
                            <div className="col-md-10">
                                {
                                    //mapping elemnts in wishlist page
                                    wishlist?.map((WishItem => {
                                        const { props } = WishItem
                                        //checking id item is present in cart-if yes it will not be in wishlist
                                        return (
                                            <div className="row p-2 bg-white border mt-3 rounded ">
                                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" alt="" src="https://i.imgur.com/QpjAiHq.jpg" /></div>
                                                <div className="col-md-6 mt-1">
                                                    <h5>{WishItem.props.title}</h5>
                                                    <div className="d-flex flex-row">
                                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                                    </div>
                                                    <div className="mt-1 mb-1 spec-1"><span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br /></span></div>
                                                    <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br /></span></div>
                                                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                </div>
                                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <h4 className="mr-1">{WishItem.props.newPrice}</h4><span className="strike-text">$20.99</span>
                                                    </div>
                                                    <h6 className="text-success">Free shipping</h6>
                                                    <div className="d-flex flex-column mt-4">
                                                        {
                                                            // checking in cart
                                                        }
                                                        {cart?.some(item => item.props.id === WishItem.props.id) ? (<button onClick={() => {

                                                            countContext.countDispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: { props }
                                                            })
                                                        }
                                                        } className="btn btn-primary btn-sm " type="button">Remove</button>)
                                                            :
                                                            (<button onClick={() => {
                                                                countContext.countDispatch({
                                                                    type: "ADD_TO_CART",
                                                                    payload: { props }
                                                                })
                                                            }
                                                            } className="btn btn-primary btn-sm " type="button">Add to Cart</button>
                                                            )

                                                        }
                                                        <button className="btn btn-secondary btn-sm mt-2" type="button">Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }))
                                }
                            </div>
                        </div>
                    </div>
                )

            }
        </ >

    )

}