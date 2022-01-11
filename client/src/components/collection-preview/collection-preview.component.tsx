import React from "react";

import { CollectionPreviewProps, Item } from "shop-component-types";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  routeName,
  items,
  history,
  match,
}) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item: Item, index: number) => index < 4)
        .map((item: Item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
