import * as React from "react";
interface ICardElement {
  name: string;
  email: string;
  id: number;
}

const Card: React.SFC<ICardElement> = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
};

export default Card;