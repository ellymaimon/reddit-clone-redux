import React from 'react';
import { connect } from 'react-redux';

function NewPostForm() {

  function handleNewPostFormSubmission(e) {
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: null,
      title: e.target.title.value,
      message: e.target.message.value,
      user: "joe",
      votes: 0
    };
    dispatch(action);
    e.target.title.value = '';
    e.target.message.value = '';
  }

  return (
    <div>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Message:</label>
          <input type="text" name="message" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default connect()(NewPostForm);
