import React from "react";
import { useDispatch } from "react-redux";

import Jauge from './Jauge';

import './Cards.css';

const Cards = props => {

    const { movie = {} } = props;
    const dispatch = useDispatch();
    const { id, title, category, likes, dislikes } = movie;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card my-4 content">
                <h3 className="card-title card-header">{title}</h3>
                <div className="content">
                    <h5 className="category">{category}</h5>
                    <Jauge likes={likes} dislikes={dislikes} />
                    <p></p>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-like">
                                <i className="fas fa-thumbs-up" />{likes}
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-dislike">
                                <i className="fas fa-thumbs-down" /> {dislikes}
                            </button>
                        </div>
                    </div>
                    <p></p>
                    <div className="">
                        <span className="btn btn-del" onClick={() => dispatch({ type: "MOVIE_SUPPR", id: id })}>
                            <i className="fas fa-trash" /> Supprimer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
