import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper, Contain, P } from '../../components/Collection'
import ArticleStyle from './styles'
import { Article } from '../../sdk/article.sdk'
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState({})
  const { articleId } = useParams()

  useEffect(() => {
    fetchArticlesDetails();
  }, []);

  const fetchArticlesDetails = async () => {
    const data = await Article.getArticleDetails(articleId);
    setArticleDetails(data?.articles);
  }

  const { content } = articleDetails;
  let html = '';

  if (content) {
    const contentState = convertFromRaw(JSON.parse(content));
    const editorState = EditorState.createWithContent(contentState);
    html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }


  return (
    <Wrapper>
      <Contain direction={'column'} border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} margin={'20px 0 0'} padding={'40px'} maxWidth={'820px'} width={'100%'}>
        <P weight={700} margin={'0 0 20px 0'} fontSize={55}>{articleDetails?.title}</P>
        <ArticleStyle dangerouslySetInnerHTML={{ __html: html }} />
      </Contain>
    </Wrapper>
  )
}

export default ArticleDetails;