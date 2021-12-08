import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from './../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    
    const handleClickRemove = (e)=> {
        props.removeFavorite(Number(e.target.id));
        console.log(props.favorites);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id} >
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span name={movie.id}>
                            <span 
                                className="material-icons" 
                                id={movie.id}
                                onClick={handleClickRemove}
                            >
                                remove_circle
                            </span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        favorites: state.favoritesReducer.favorites
    })
}

const mapActionsToProps = () => {
    return ({
        removeFavorite: removeFavorite
    })
}
export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);