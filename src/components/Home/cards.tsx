import React from 'react'
interface CardsPros {
    imgSrc: string;
    h1: string;
    p: string;
    HtmlElement: React.ReactNode;
}
export default function Cards(props: CardsPros) {
    return (

        <div className="doctors">
            <div>

                <header>
                    <img src={props.imgSrc} alt="" />
                </header>
                <div className="cardBody">
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>
            </div>
            <footer>
                {props.HtmlElement}
            </footer>
        </div>

    )
}
