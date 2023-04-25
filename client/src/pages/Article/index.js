import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper, Contain } from '../../components/Collection'
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

  try {
    if (content) {
      const contentState = convertFromRaw(JSON.parse(content));
      const editorState = EditorState.createWithContent(contentState);
      html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <Wrapper>
      <Contain border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} margin={'20px 0 0'} padding={'20px'} maxWidth={'820px'} width={'100%'}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Contain>
    </Wrapper>
  )
}

export default ArticleDetails;