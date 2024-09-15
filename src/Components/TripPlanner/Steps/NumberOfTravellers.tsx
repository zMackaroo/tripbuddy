import { RadioButtonGroup } from '@Utils/Constant';

const options = [
  { icon: 'fa-person-walking-luggage', title: 'Solo' },
  { icon: 'fa-heart', title: 'Couple' },
  { icon: 'fa-user-group', title: 'Friends' },
  { icon: 'fa-people-roof', title: 'Family' },
];

function NumberOfTravellers() {
  return (
    <>
      <h2 className="headline">
        What kind of trip are you planning?{' '}
        <i className="fa-solid fa-person"></i>
      </h2>
      <p className="description">Select one.</p>
      <RadioButtonGroup
        name="pax"
        className="selection__wrapper"
        options={options}
      />
    </>
  );
}

export default NumberOfTravellers;
