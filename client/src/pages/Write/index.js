import React from 'react';
import { Wrapper, Contain, Button, Textarea } from '../../components/Collection'
import { useFormik } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';



const Write = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: EditorState.createEmpty(),
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleEditorStateChange = (editorState) => {
    formik.setFieldValue('content', editorState);
  };

  const contentState = formik.values.content.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const markup = draftToHtml(rawContentState);

  const toolbarConfig = {
    options: ['inline', 'list'],

  };

  return (
    <Wrapper>

      <Contain border={'1px solid lightGrey'} borderRadius={'5px'} background={'#fff'} maxWidth={'800px'} width={'100%'} margin={'20px 0 0'} padding={'20px'}>
        <form onSubmit={formik.handleSubmit}>
          <Textarea
            id="title"
            name="title"
            type="text"
            placeholder='Title'
            fontSize={60}
            weight={700}
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <Editor
            placeholder='Write your article content here...'
            editorState={formik.values.content}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={handleEditorStateChange}
            toolbar={toolbarConfig}
          />


          <Contain maxWidth={'100px'}>
            <Button type='submit' width={'100%'} padding={'10px'} color={'#fff'} background={'#3B49DF'} borderRadius={'5px'} height={'48px'} margin={'24px 0 0'}>Publish</Button>
          </Contain>
        </form>
      </Contain>

      {/* TODO: live preview */}
      <div dangerouslySetInnerHTML={{ __html: markup }} />


    </Wrapper>

  )
}

export default Write

