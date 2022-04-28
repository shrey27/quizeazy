import './category.css';
import { useParams } from 'react-router-dom';
import { useCategoryId, ElementObject } from '../../utility';

export default function Category() {
    const { categoryId } = useParams();
    const quizData = useCategoryId(`${categoryId}`);

    return <div>
        <h1 className="title categoryTitle xl sb cen">{categoryId}</h1>
        <h1 className="subtitle lg bd cen">Pick a quiz from these options</h1>
        <div className="category">
            {quizData.map((element: ElementObject) => {
                return <div className="card genre" key={`${element.title}`}>
                    <img
                        src={`${element.banner}`}
                        alt="Banner"
                        className="card__banner"
                    />
                    <section className="content flex-ct-st flex-vertical">
                        <h1 className="card__title">{element.title}</h1>
                        <h1 className="card__subtitle">5 questions</h1>
                        <p className="card__content">
                            {element.description}
                        </p>
                        <button className="btn btn--dark">Play Now</button>
                    </section>
                </div>
            })}

        </div></div>
}