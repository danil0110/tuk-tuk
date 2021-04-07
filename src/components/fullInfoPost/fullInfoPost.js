import React from 'react';


const FullInfo = ({type, title, description, district, location, ownerPhoneNumber, price}) => {
    return (
        <div className = 'full-info'>
            <h2>Повна інформація про пост</h2>
            <div className = 'full-info-description'>
                <div className = 'full-info-row'>
                    <h3>Тип:</h3>
                    <span className = 'col-sm-9 text-secondary'>{type}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Назва:</h3>
                    <span className = 'col-sm-9 text-secondary'>{title}</span>
                </div>
                <div className = 'full-info-row-description'>
                    <h3>Опис:</h3>
                    <span className = 'col-sm-9 text-secondary'>{description}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Район:</h3>
                    <span className = 'col-sm-9 text-secondary'>{district}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Адреса:</h3>
                    <span className = 'col-sm-9 text-secondary'>{location}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Номер телефону власника квартири:</h3>
                    <span className = 'col-sm-9 text-secondary'>{ownerPhoneNumber}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Ціна:</h3>
                    <span className = 'col-sm-9 text-secondary'>{price}</span>
                </div>
            </div>
        </div>
    );
}

export default FullInfo;