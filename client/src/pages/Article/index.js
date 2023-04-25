import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, Contain, P, Image } from '../../components/Collection';
import ArticleStyle from './styles';
import { Article } from '../../sdk/article.sdk';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import moment from 'moment';

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState(null)
  const { articleId } = useParams()

  // TODO: move to redux
  useEffect(() => {
    const onMount = async () => {
      const data = await Article.getArticleDetails(articleId);
      setArticleDetails(data?.articles);
    }
    if (!articleDetails) {
      onMount()
    }
  }, [articleDetails]);

  const { content } = articleDetails || {};
  let html = '';

  if (content) {
    const contentState = convertFromRaw(JSON.parse(content));
    const editorState = EditorState.createWithContent(contentState);
    html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }


  return (
    <Wrapper>
      <Contain align={'center'} border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} margin={'20px 0 0'} padding={'10px'} maxWidth={'820px'} width={'100%'}>
        <Image width={'100px'} src={articleDetails?.creator?.avatar} alt={'articleCreatorAvatar'} />
        <Contain margin={'0 0 0 20px'} direction={'column'}>
          <Link to={`/profile/${articleDetails?.creator?.username}`}><P weight={'700'} fontSize={30} hoverAnimation>{articleDetails?.creator?.username}</P></Link>
          <P>{moment(articleDetails?.createdAt).format('MMM D')}</P>
        </Contain>
      </Contain>
      <Contain direction={'column'} border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} margin={'20px 0 0'} padding={'40px'} maxWidth={'820px'} width={'100%'}>
        <P weight={700} margin={'0 0 20px 0'} fontSize={55}>{articleDetails?.title}</P>
        <ArticleStyle dangerouslySetInnerHTML={{ __html: html }} />
      </Contain>
    </Wrapper>
  )
}

export default ArticleDetails;