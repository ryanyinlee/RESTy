import { useState, useEffect, React }  from 'react';

import './form.scss';

function Form (props) {

  let [url, setUrl] = useState('https://pokeapi.co/api/v2/');
  let [method, setMethod] = useState('GET');
  let [jsonObject, setJsonObject] = useState({});

  useEffect(() => {
    // returning a function causes this to run on un-mount
    return () => {
        console.log('form removed from DOM');
    }
});

const jsonPlaceholder = {
  'name': "testname",
  'age': '99',
  'placeOfBirth': 'leeds, uk',
  'SSN': '1-23-45-67-89'
}

    function onSubmit(event){
      event.preventDefault();
      props.handleApiCall({method, url});
    }

  const handleUrl = event => {
      event.preventDefault();
      setUrl(event.target.value)
    
    }

  const handleJson = event => {
      event.preventDefault();
      setJsonObject(event.target.value);
    }


const handleMethod = event => {
  event.preventDefault();
  console.log(event.target.id);
  setMethod(event.target.id)
 }

      return (
        <>
          <form onSubmit={onSubmit}>
            <label >
              {/* <span>URL: {url} </span>
              <span>Method: {method}</span> */}
              <input onChange={handleUrl} data-testid="url-input" name='url' type='text' />
              <button data-testid= "submit-btn" type="submit">GO!</button>
            </label>
            <label onClick={handleMethod} className="methods">
              <span data-testid="get-btn" id="GET" >GET</span>
              <span data-testid="post-btn" id="POST" >POST</span>
              <span data-testid="put-btn" id="PUT" >PUT</span>
              <span data-testid="delete-btn" id="DELETE" >DELETE</span>
            </label>
            <textarea value={JSON.stringify(jsonPlaceholder)} onChange={handleJson} id="jsonentry" data-testid="jsonentry" rows="25" cols="50"> </textarea>
          </form>
        </>
      );

    
}


export default Form;