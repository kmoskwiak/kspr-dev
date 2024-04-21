import * as React from "react";
import { API } from "../config";

export const Articles = (): JSX.Element => {

  return (
    <div>
      Articles {API.articles}
    </div>
  );
};
