import React from 'react';
import { Episode } from './modal';

interface EpisodesProps {
  episodes: Episode[] | null;
}

export const Episodes: React.FC<EpisodesProps> = ({ episodes }) => {
  console.log(episodes);
  if (episodes && episodes.length > 0) {
    return (
      <>
        <div className="episodes-container" data-testid="episodes">
          {episodes.length > 0 &&
            episodes.map((item) => (
              <li role="listitem" key={item.id}>
                <h5>
                  {item.name} / <span className="episode">{item.episode}</span>
                </h5>
              </li>
            ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="no-episodes"></div>
      </>
    );
  }
};
