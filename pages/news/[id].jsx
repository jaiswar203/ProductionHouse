
import { data } from "../../src/db/data"
import { Layout } from '../../src/components'

const NewsDetail = (id) => {
    const newData = data.news.find((d) => id.id == d.id)
    return (
        <Layout title={`${newData.main}`}>
            <div className="triflix__news-detail">
                <div className="triflix__news-detail-data">
                    <div className="triflix__news-detail-data__heading">
                        <h1>{newData.main}</h1>
                        <p>{newData.title}</p>
                    </div>
                    <div className="triflix__news-detail-data__image">
                        <img src={newData.link} alt={newData.main} />
                        <div className="triflix__news-detail-data__image__date">
                            <div className="date">
                                <i className="fas fa-calendar"></i>
                                <p>{newData.date}</p>
                            </div>
                            {/* <div className="share">
                                <i className="fas fa-share"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="triflix__news-detail-data__content">
                        <div className="triflix__news-detail-data__content-heading">
                            <h2>{newData.title}</h2>
                        </div>
                        <p>{newData.paragraph}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NewsDetail


export async function getServerSideProps(context) {
    const { params } = context
    return {
        props: {
            id: params.id
        }
    }

}