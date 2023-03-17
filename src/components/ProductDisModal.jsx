
import './ProductDiscription.css'

export default ({ props, setDisplayModal }) => {
    console.log(props)
    return (<>
        <div className="product-discription-card m-2  ">
            <dialog open className='dialog'  >
                <article>
                    <hgroup>
                        <div className="product-discription" id="productModal" >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <a href="#close "
                                            className="close d-flex justify-content-end m-2"
                                            onClick={() => { setDisplayModal(null) }}>
                                            <i className="fa fa-times"></i> </a>
                                        <div className="row p-2">
                                            <div className="col-md-4  justify-content-center w-0">
                                                <img src={props.img} className=" product-img img-fluid" alt="Product Image" />
                                            </div>

                                            <div className="col-md-8">

                                                <div className="d-flex justify-content-between align-items-start">
                                                    <h5 className="mb-0">Product Name</h5>
                                                </div>
                                                <p className="mt-3  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae quam eget neque tincidunt posuere. Sed eu elit a nunc tincidunt vestibulum. Sed at arcu sit amet augue placerat consectetur. Sed vitae tellus quis velit pulvinar elementum. Sed quis luctus felis, vel interdum ex.</p>
                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                    <h6 className="mb-0">$50.00</h6>
                                                    <div>
                                                        <button type="button" className="btn btn-primary mr-2">Buy</button>
                                                        <button type="button" className="btn btn-outline-primary">Wishlist</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </hgroup>

                </article>
            </dialog>
        </div>

    </>)
};
