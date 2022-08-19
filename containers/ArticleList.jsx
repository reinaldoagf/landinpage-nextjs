import React from 'react';
import Spinner from '../components/Spinner';
import ArticleItem from '../components/ArticleItem';
import useGetArticles from '../hooks/useGetArticles';

const API = 'https://5eed24da4cbc340016330f0d.mockapi.io/api';

const ArticleList = ({query}) => {
    const {loading, articles} = useGetArticles(`${API}/${query}`)
    return (
        <section className="articles-container">
            {loading && <Spinner />}
            { !loading &&
                articles.map(e => (
                    <ArticleItem article={e} key={e.id} />
                ))
            }
        </section>
    );
}

export default ArticleList;
