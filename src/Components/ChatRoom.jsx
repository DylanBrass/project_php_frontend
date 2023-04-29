import React, { useState } from 'react';
import axios from 'axios';


function ChatRoom() {
  const [messages, setMessages] = useState([]);


  const sendMessage = (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (event.target.elements.desc.value != null || event.target.elements.desc.value != "")
      formData.append('description', event.target.elements.desc.value);
    else
      formData.append('description', " ");

    if (event.target.elements.img.files[0] != null) {
      formData.append('image', event.target.elements.img.files[0]);
    } else {
      formData.append('image', "");
    }
    formData.append('sender_id', JSON.parse(sessionStorage.getItem('user')).id);
    formData.append('receiver_id', sessionStorage.getItem('targetUser'));

    axios.post('http://127.0.0.1:8000/api/messages', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => setMessages([...messages, response.data]))
      .catch(error => console.error(error));

    setMessages('');
    event.target.elements.desc.value = "";
    event.target.elements.img.value = "";
  };


  return (

    <div>


      <form onSubmit={sendMessage}>
        <input
          name='desc'
        />
        <label for="file">Filename:</label>

        <input type="file" name="img" accept=".gif, .jpeg, .jpg, .png" nullable />
        <button type='submit'>Send Message</button>

      </form>





    </div >
  );
}

export default ChatRoom;
