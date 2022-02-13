import React from "react";
import './main.css';
import {data, posts} from './data'
import {Link } from 'react-router-dom';

function Main () {
    return(
        <>
            <section className="main">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-6">
                            <p className="bigtitle">Lộ trình học</p>
                        </div>
                        <div className="col-6 text-end">
                            <p className="add"><Link to="/course">Xem chi tiết &#8811;</Link></p>
                        </div>
                    </div>
                    <div className="row">
                        {data.map((course, i) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 main" key={i}>
                                    <div className="card">
                                        <img src={course.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"><Link to="/course" className="link">{course.courseName}</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row mb-2">
                        <div className="col-6">
                            <p className="bigtitle">Bài viết nổi bật</p>
                        </div>
                        <div className="col-6 text-end">
                            <p className="add"><Link to="/post">Xem chi tiết &#8811;</Link></p>
                        </div>
                    </div>
                    <div className="row">
                        {posts.map((post, i) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 main" key={i}>
                                    <div className="card">
                                        <img src={post.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title"><Link to="/post" className="link">{post.postName}</Link></h5>
                                            <p className="card-text">{post.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Main