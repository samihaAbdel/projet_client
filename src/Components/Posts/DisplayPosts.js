import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../Redux/actions/post";
import "./style.css";
function DisplayPosts () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    },[dispatch])
    const posts = useSelector((state) => state.postReducer.posts);
    
    return (
        <div className="pub-card">
            {posts && posts.map((p) =>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img style ={{ height:'170px'}} variant="top" src={p.LinkImage} />
                    <Card.Body>
                        <Card.Title>{p.Title}</Card.Title>
                        <Card.Text>
                            {p.Description}
                        </Card.Text>
                        <Button variant="outline-secondary">delete</Button>
                        <Button variant="outline-secondary">Update</Button>
                    </Card.Body>
                </Card>)}
        </div>
    )
}
export default DisplayPosts;