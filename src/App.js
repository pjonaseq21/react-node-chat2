import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';


function Welcome(){
 return <h1>Hello world </h1>;
}
function Body(){
  return (
    <>

  <div>test</div>
  <Button variant="success">Success</Button>

  </>

  )
}
const SiteComponents = {
  Welcome,Body
};
export default SiteComponents;
