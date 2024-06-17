import React from "react";

import "./style.scss";

import new_collections from "../../assets/new_collections";
import Item from "../Item";

import { TypeItem } from "../Popular";

type Props = {};

const NewCollections = (props: Props) => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <span className="new-collections__underline"></span>

      <div className="new-collections__item">
        {new_collections.map((item: TypeItem) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
