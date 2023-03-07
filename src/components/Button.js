import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import resources from '../resources/ressurser';

export default function Nav() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    // Get the first category from the resources array
    const categories = resources.map(res => res.category);
    const defaultCategory = categories[0];

    // Set the active button to the first category if no category is selected
    if (location.pathname === '/') {
      setActiveButton(defaultCategory);
    }
  }, [location]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const btn = resources.reduce((names, element) => {
    if (!names.includes(element.category)) {
      names.push(element.category);
    }
    return names;
  }, []);

  return (
    <>
      {btn.map((button) => (
        <Link
          key={button}
          to={`/${button}`}
          className={`btn ${activeButton === button ? 'active' : ''}`}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </Link>
      ))}
    </>
  );
}