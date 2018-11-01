import React from 'react';

const Card = (props) => {
    const cardTemplate = props.data.map(function(item) {
        return (
            <div className={`${item.className} ${item.selected ? 'selected' : ''}` }
                 data-available={item.available}
                 key={item.id}
                 onMouseLeave={(e) => props.addHoverClass(item.id, e)}>
                <a href="#" className="card " onClick={(e) => props.handleSelect(item.id, e)}>
                    <div className="card__wrap">
                        <p className="card__product card__product--default">Сказочное заморское яство</p>
                        <p className="card__product card__product--hover">Котэ не одобряет?</p>
                        <h2 className="card__ttl2">{item.name}</h2>
                        <p className="card__ttl-sub">{item.subname}</p>
                        <p className="card__descr"><span className="bold">{item.count}</span> порций</p>
                        <p className="card__descr">{item.gift}</p>
                        <p className="card__descr">{item.add}</p>
                        <div className="card__weight">
                            <p className="card-weight__big">{item.weight}</p>
                            <p className="card-weight__sub">кг</p>
                        </div>
                    </div>
                </a>
                <p className="card__bot-text card__bot-text--default">Чего сидишь? Порадуй котэ, <a href="#"
                                                                                                    className={`${item.selected ? 'selected' : ''}`}
                                                                                                    onClick={(e) => props.handleSelect(item.id, e)}>купи</a>.
                </p>
                <p className="card__bot-text card__bot-text--selected">{item.decription}</p>
                <p className="card__bot-text card__bot-text--disabled">Печалька, с курой закончился.</p>
            </div>
        )
    });

    return cardTemplate
};

export default Card;