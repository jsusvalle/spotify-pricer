import './icon-bar.css';
import { Icons } from '../../../helpers';

export const IconBar = () => {
  return (
    <ul className="list">
      {Icons.map(element => {
        return (
          <li className="list__item" key={element.name}>
            <img src={element.path} alt="icon"></img>
            <p>{element.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
