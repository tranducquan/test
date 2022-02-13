import React from "react";
import Btn from "../../btn/Btn";
import Nav from '../../nav/Nav';
import Foot from '../../footer/Foot';
import {data} from '../../main/data';

export default function Post (){
    return (
        <>
            <Nav/>
            <Btn/>
            <div className="container">
                <div className="post">
                    
                    <div className="row">
                    {data.map((course, i) => {
                        return (
                            <div className="col-4 main" key={i}>
                                <div className="card">
                                    <img src={course.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.courseName}</h5>
                                        <p className="card-text">{course.description}</p>
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