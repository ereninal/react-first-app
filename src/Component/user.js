import React from 'react'

function user(props) {
    OnClickEvent(e)
    {
        console.log(e.target);
    }    
    const state = false;
    const content = props.posts.map((post)=> 
        <div key={post.id} className="col-md-8 mb-4 justify-content-center">
            <div className="card">
                <div className=" card-header d-flex justify-content-between">
                <h4 className="d-inline" onClick ={this.OnClickEvent}>{post.name}</h4>
                    <i className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>
                </div>
                {
                state ? <div className="card-body"> 
                    <div className="card-text">Maaş :{post.salary}</div>
                    <div className="card-text">Meslek :{post.Job}</div>
                </div> : null
                }
            </div>
        </div>
    );
    return (
        <div>
            {content}
        </div>
        
        
    )

}
export default user;