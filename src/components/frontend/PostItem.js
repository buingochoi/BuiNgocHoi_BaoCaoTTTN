import urlImage from "../../Config";

function PostItem(props) {
    return (
        
                    <div class="col-md-3">

                        <div class="card card-category">
                            <div class="card card-post" >

                                <img
                                    className="card-img-top"
                                    src={urlImage + "post/" + props.post.image}
                                    
                                    alt="hinh"
                                />

                            </div>
                            <div class="card-body">
                                <h4 class="card-title"><a href="#">{props.post.title}</a></h4>
                                <div>
                                    {props.post.detail}
                                </div>
                            </div>
                        </div>
                    </div>






    );
}

export default PostItem;