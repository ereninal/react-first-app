import React from 'react'

function user(props) {
    return (
        <div className="col-md-8 mb-4 justify-content-center">
            <div className="card">
                <div className=" card-header d-flex justify-content-between">
                    <h4 className="d-inline">{props.name}</h4>
                    <i className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>

                </div>
                <div className="card-body"> 
                    <div className="card-text">Maaş :{props.salary}</div>
                    <div className="card-text">Meslek :{props.job}</div>
                </div>
            </div>
        </div>
    )
}
export default user;