import React from "react";
import './nav.css';
import {Link } from 'react-router-dom';

export default function Nav(){
    return (
        <>
            <section className="Navbar">
                <div className="container-fluid p-0">
                   <div className="header">
                       <div className="row">
                           <div className="col-4 text-center">
                               <Link to="/">Học lập trình WebSite</Link>
                           </div>
                           <div className="col-4">
                               <input className="form-control" type="text" placeholder='Tìm kiếm khóa học, bài viết... '/>
                           </div>
                           <div className="col-4 text-center">
                               <ul>
                                    <Link to="/login">Đăng nhập</Link>
                                    <Link to="/login">Đăng ký</Link>
                               </ul>
                           </div>
                       </div>
                        
                   </div>
                </div>
            </section>
        </>
    )
}