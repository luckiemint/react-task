import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { serialize } from "react-serialize";
import axios from "axios";
import Konva from "konva";

const App = () => {
  const [data, setData] = useState({ x: 20, y: 20 });
  // let xPos = 20;
  // let yPos = 20;

  const onDragfn = (e) => {
    const posi = e.target.parent.parent.getPointerPosition();
    console.log(e.target);
    console.log(posi);
    var pos = {
      x: e.target.attrs.x,
      y: e.target.attrs.y,
    };
    postData(pos);
    // localStorage.setItem("Position", json);
    // var stage = Konva.Node.create(json, "container"); // same as 'e.target'
    // console.log(stage);
  };
  const postData = async (data) => {
    await axios.put("http://localhost:3032/data/1", data);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios
        .get("http://localhost:3032/data/1")
        .then((res) => {
          setData(res.data);
        });
    };
    getData();
  }, []);

  const input = (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          // ref={shapeRef}
          x={data.x}
          y={data.y}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
          draggable={true}
          onDragEnd={onDragfn}
        />
      </Layer>
    </Stage>
  );

  return <>{input}</>;
};

export default App;
