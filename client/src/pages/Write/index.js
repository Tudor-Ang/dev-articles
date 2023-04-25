import React from 'react';
import { Wrapper, Contain, Button, Textarea } from '../../components/Collection'
import { useFormik } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Article } from '../../sdk/article.sdk'
import { useNavigate } from 'react-router-dom';

const Write = ({ userDetails }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const res = await Article.createArticle(values?.title, JSON.stringify(convertToRaw(values.content.getCurrentContent())), userDetails).catch(err => {
      console.log(err.error);
      return;
    });

    if (!res.success) {
      console.log(res.msg);
      return;
    } else {
      navigate('/');
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      creator: '',
      content: EditorState.createEmpty(),
    },
    onSubmit: (values) => handleSubmit(values),
  });

  const handleEditorStateChange = (editorState) => {
    formik.setFieldValue('content', editorState);
  };

  const toolbarConfig = {
    options: ['inline', 'list'],

  };

  return (
    <Wrapper>
      <button onClick={() => console.log(formik.values.content.getCurrentContent())}>formik</button>
      <button onClick={() => console.log(formik.values)}>formik</button>
      <Contain border={'1px solid lightGrey'} borderRadius={'5px'} background={'#fff'} maxWidth={'800px'} width={'100%'} margin={'20px 0 0'} padding={'20px'}>
        <form onSubmit={formik.handleSubmit}>
          <Textarea
            id='title'
            name='title'
            type='text'
            placeholder='Title'
            fontSize={60}
            weight={700}
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <Editor
            placeholder='Write your article content here...'
            editorState={formik.values.content}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={handleEditorStateChange}
            toolbar={toolbarConfig}
          />


          <Contain maxWidth={'100px'}>
            <Button type='submit' width={'100%'} padding={'10px'} color={'#fff'} background={'#3B49DF'} borderRadius={'5px'} height={'48px'} margin={'24px 0 0'}>Publish</Button>
          </Contain>
        </form>
      </Contain>

      {/* TODO: live preview */}


    </Wrapper>

  )
}

export default Write

