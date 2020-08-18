import React, { useState, useEffect } from "react";
import { axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [dependency, setDependency] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get('colors')
    .then(res => {
      console.log('BubblesPage.js, axiosWithAuth success:', res);
      setColorList(res.data);
      setDependency(false);
    })
    .catch(error => console.error(error));
  }, [dependency]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setDependency={setDependency}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
