import React from "react";
import './btn.css';
import {Link } from 'react-router-dom';



export default function Btn (){
    return(
        <>
            <div className="container">
                <div className="buton text-center">
                    <Link to="/">Giới thiệu</Link>
                    <Link to="/post">Bài viết</Link>
                    <Link to="/course">Khóa học</Link>
                    <Link to="/news">Tin tức</Link>
                    <Link to="/contact">Liên hệ</Link>
                </div>
            </div>
        </>
    )
}