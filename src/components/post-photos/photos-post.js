import React from 'react';
import React, {Component} from 'react';
import './photos-post.css';


export default class PhotosPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    nextSlide()  {
        const {photos} = this.props;
        this.setState(({current}) => ({
            current: current === photos.length - 1 ? 0 : current + 1,
        }))
    }

    prevSlide() {
        const {photos} = this.props;
        this.setState(({current}) => ({
            current: current === 0 ? photos.length - 1 : current - 1,
        }))
    }

    render() {
        const {photos} = this.props;
        const {current} = this.state;
        return (
            <div className = 'photos'>
                <h2>Фотографії</h2>
                <div className = 'slider'>
                    <i className="fas fa-arrow-alt-circle-left left-arrow" onClick = {this.prevSlide}></i>
                    <i className="fas fa-arrow-alt-circle-right right-arrow" onClick = {this.nextSlide}></i>
                    {photos.map((photo, index) => {
                        return (
                            <div key = {photo.id} className = {index === current ? 'photo active' : 'photo'}>
                                {index === current && (
                                    <div className = 'slide'>
                                        <img src = {photo.src} className = 'image'></img>
                                        <span>{index + 1}/{photos.length}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
};
