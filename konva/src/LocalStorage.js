import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { serialize } from "react-serialize";
import axios from "axios";
import Konva from "konva";

const LocalStorage = () => {
  const [data, setData] = useState({ x: 20, y: 20 });

  const onDragfn = (e) => {
    // const posi = e.target.parent.parent.getPointerPosition();
    // console.log(e.target);
    // console.log(posi);
    var pos = {
      x: e.target.attrs.x,
      y: e.target.attrs.y,
    };
    // postData(pos);
    // console.log(pos);
    localStorage.setItem("Position", JSON.stringify(pos));
  };

  useEffect(() => {
    const getPos = localStorage.getItem("Position");
    setData(JSON.parse(getPos));
    console.log(JSON.parse(getPos));
  }, []);

  const input = (
    <Stage width={600} height={600}>
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

export default LocalStorage;
