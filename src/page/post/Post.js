import React from "react";
import Btn from "../../btn/Btn";
import Nav from '../../nav/Nav';
import Foot from '../../footer/Foot';
import {posts} from '../../main/data';
import './post.css'

export default function Post (){
    return (
        <>
            <Nav/>
            <Btn/>
            <div className="container">
                <div className="post">
                    <h2>Bài viết nổi bật</h2>
                    <p>Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.</p>
                    <div className="row">
                    {posts.map((post, i) => {
                        return (
                            <div className="col-6 main" key={i}>
                                <div className="card">
                                    <img src={post.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.postName}</h5>
                                        <p className="card-text">{post.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <Foot/>
        </>
    )
}