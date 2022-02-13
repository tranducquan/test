import React from "react";
import './foot.css'



export default function Foot(){
    return (
        <>
            <section className="footer">
                <div className="container-fluid p-0">
                    <div className="foot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg 3 col-md-6 col-sm-12">
                                    <h6>Về chúng tôi </h6>
                                    <p>Giới thiệu</p>
                                    <p>Cơ hội việc làm</p>
                                    <p>Đối tác</p>
                                </div>
                                <div className="col-lg 3 col-md-6 col-sm-12">
                                    <h6>Hỗ trợ</h6>
                                    <p>Bảo mật</p>
                                    <p>Điều khoản</p>
                                </div>
                                <div className="col-lg 3 col-md-6 col-sm-12">
                                    <h6>Liên hệ</h6>
                                    <p>Hotline: 093 689 61 78</p>
                                    <p>Email: trndcqun312@gmail.com</p>
                                    <p>Địa chỉ: 14 Trần Phú, Hà Đông, Hà Nội</p>
                                </div>
                                <div className="col-lg 3 col-md-6 col-sm-12">
                                    <h6>Ứng dụng liên kết</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>© 2022 F8 - Nền tảng học lập trình web đầu tiên tại Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}