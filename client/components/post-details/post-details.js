import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './post-details.css';

import InvolvedUsers from '../post-involved-users';
import PhotosPost from '../post-photos';

const flatView = (props) => {
    const {
        type,
        title,
        description,
        district,
        location,
        ownerPhoneNumber,
        price,
        date,
        involvedUsers,
        photos
    } = props;

    return (
        <div>
            <div className = 'post-details-info'>
                <div className="flex-wrapper">
                    <div className="user-info">
                        <div className="avatar">
                            <img src="https://via.placeholder.com/500"></img>
                        </div>
                        <Link to="/profile">
                            <span>John Week</span>
                        </Link>
                    </div>
                    <div>{date}</div>
                </div>
                <hr></hr>
                <div className="details">
                    <div className="title">
                        {title}
                    </div>
                    <div className="type">
                        <h4>Тип оголошення</h4>
                        <span>{type}</span>
                    </div>
                    <div className="description">
                        <h4>Опис</h4>
                        <span>{description}</span>
                    </div>
                    <div className = "district">
                        <h4>Район</h4>
                        <span>{district}</span>
                    </div>
                    <div className = "location">
                        <h4>Адреса</h4>
                        <span>{location}</span>
                    </div>
                    <div className = "phone-number">
                        <h4>Номер телефону власника квартири</h4>
                        <span>{ownerPhoneNumber}</span>
                    </div>
                    <div className="price">
                        <h4>Ціна</h4>
                        <span>{price} &#8372;</span>
                    </div>
                </div>
            </div>
            <PhotosPost photos = {photos}/>
            <InvolvedUsers users = {involvedUsers}/>
        </div>
    );
}

const groupView = (props) => {

    const {
        type,
        title,
        description,
        date,
        involvedUsers
    } = props;

    return (
        <div>
            <div className="post-details-info">
                <div className="flex-wrapper">
                    <div className="user-info">
                        <div className="avatar">
                            <img src="https://via.placeholder.com/500"></img>
                        </div>
                        <span>John Week</span>
                    </div>
                    <div>{date}</div>
                </div>
                <hr></hr>
                <div className="details">
                    <div className="title">
                        {title}
                    </div>
                    <div className="type">
                        <h4>Тип оголошення</h4>
                        <span>{type}</span>
                    </div>
                    <div className="description">
                        <h4>Опис</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
            <InvolvedUsers users = {involvedUsers}/>
        </div>
    );
}


export default class PostDetails extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { type } = this.props;
        const view = type === 'Пошук співмешканця' ? flatView(this.props) : groupView(this.props);
        return (
            <div className = 'post-details-container'>
                <h1>Повна інформація</h1>
                {view}
            </div>
        );
    }
}
