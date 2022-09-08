import React from 'react'

const Axios = () => {
  return (
    <div>
        <h1>difference between axios and fetch?</h1><br/>
        <h4>axios is a javascript library to make http request from node or xmlhttprequest from browser.it supports the promise API of js ES6.</h4>
        <h4>fetch method is given by the fetch API which is built in most of the modern browsers.it takes one mandatory argument ,url of the resource to be fetched.</h4>
        <h4>axios has data property while fetch has body property</h4>
        <h4>axios has ability to intercept http request while fetch by default does not provide any such facility.</h4>
        <h4>axios is third party package which we have to install while fetch is built in most of the browsers.</h4>
        <h4>axios automatically transfroms json data into object,while in fetch,we have to manually convert it by calling the .json() method on the response which we get from server.</h4>
    </div>
  )
}

export default Axios