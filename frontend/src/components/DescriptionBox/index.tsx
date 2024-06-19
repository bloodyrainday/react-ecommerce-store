import React from "react";

import "./style.scss";

type Props = {};

const DescriptionBox = (props: Props) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox__nav">
        <div className="descriptionbox__navbox">Description</div>
        <div className="descriptionbox__navbox fade">Reviews (123)</div>
      </div>
      <div className="descriptionbox__desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
          dolores unde fugiat excepturi laboriosam necessitatibus sed quasi
          atque dolor optio, harum velit? Quibusdam assumenda alias facere,
          minus aut corporis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          mollitia, perferendis rerum inventore ut corporis in voluptatem velit
          voluptas rem officiis voluptates a earum molestiae dolor aspernatur
          laudantium beatae eos?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
