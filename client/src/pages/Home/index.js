import React, { useEffect, useState } from 'react'

import Post from '../../components/Post'
import { Wrapper } from '../../components/Collection'

import { Article } from '../../sdk/article.sdk'

const Home = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const data = await Article.getArticles();
    setArticles(data?.articles);
  }

  return (
    <Wrapper>

      {articles?.map((article) => (<Post key={article?._id} data={article} />))}


    </Wrapper>
  )
}

export default Home