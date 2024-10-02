import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [activeButton, setActiveButton] = useState('Jam');
  const [activeHeaderButton, setActiveHeaderButton] = useState(false);

  const getButtonLabel = good => {
    if (activeHeaderButton === true) {
      return '+';
    }

    if (activeButton === good) {
      return '-';
    }

    return '+';
  };

  const getClassName = good => {
    if (activeHeaderButton === true) {
      return '';
    }

    if (good === activeButton) {
      return 'has-background-success-light';
    }

    return '';
  };

  return (
    <main className="section container">
      {activeHeaderButton === true ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => {
              setActiveHeaderButton(true);
            }}
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" key={good} className={getClassName(good)}>
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => {
                    setSelectedGood(good);
                    setActiveButton(good);
                    setActiveHeaderButton(false);
                  }}
                >
                  {getButtonLabel(good)}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
