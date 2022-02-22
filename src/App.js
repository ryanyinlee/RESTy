import React from 'react';
import { useState, useEffect } from "react";
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {


  const [params, setParams] = useState([]);
  
  useEffect(() => {
    console.log("Name value updated.");
  }, [params]); 

  // useEffect(() => {
  //   fetch(formData.url)
  //   .then(results => results.json())
  //   .then(data => {
  //     const {name} = data.results[0];
  //     receivedData
  //   })
  //   console.log("Component has mounted.");
  // }, []); 


  function callApi ({method, url})  {    
    console.log("method: ", method);
    console.log("URL: ", url);
    setParams([...params, {method, url}]);
  };

  // data={thisincomingData}
  // inside <Results/>
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {params.method}</div>
      <div>URL: {params.url}</div>
      <Form handleApiCall={callApi} />
      <Results params={params} />
      <Footer />
    </React.Fragment>
  );

}

export default App;