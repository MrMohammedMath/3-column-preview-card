export interface ICard {
    icon: string;
    title: string;
    paragraph: string;
}

export function Card(props: { data: ICard }) {
    return (
        <article className="card">
            <img src={props.data.icon} alt="" className="card.icon"/>
            <h1 className="card.title">{props.data.title}</h1>
            <p className="card.paragraph">{props.data.paragraph}</p>
            <button className="card.btn">Learn More</button>
        </article>
    );
}