import React from "react";
import { Page } from "zmp-ui";

import { IndoorMap } from "../components/indoor-map";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="page !p-0">
      <IndoorMap
        center={[10.758459731326012, 106.74591198563577]}
        markers={[
          {
            name: 'Zalo Mini App',
            position: [10.7583233667634, 106.74587175250053]
          },
          {
            name: 'Zalo Server',
            position: [10.758205447599162, 106.74565047025682]
          },
          {
            name: 'Zalo Game',
            position: [10.758347741110036, 106.74574032425882]
          },
          {
            name: 'Zalo PC',
            position: [10.758403077457245, 106.74605950713158]
          },
          {
            name: 'Zalo QC',
            position: [10.758762763466562, 106.7459723353386]
          }
        ]}
      />
    </Page>
  );
};

export default HomePage;
