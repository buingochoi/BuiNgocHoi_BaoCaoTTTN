import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import urlImage from "../../../Config";
import PostItem from "../../../components/frontend/PostItem";

function Post() {
    const [posts, setPost] = useState([]);

    useEffect(function () {
      (async function () {
        await postservice.getAll().then(function (result) {  
                setPost(result.data.data);
        });
      })();
    }, []);
    return ( 
        <section className="padding-bottom-sm">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">REVIEWER NÓI GÌ VỀ DIENTHOAIHAY.VN?</h4>
      </header>
      <div className="row row-sm">
      <div className="row">
                {posts.map(function (post, index) {
                  return <PostItem post={post} key={index} />;
                })}
              </div>
      </div>
      
    </section>
     );
}

export default Post;