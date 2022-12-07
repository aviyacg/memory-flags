
function Card(props) {
  const { flag, countryName, cardClicked } = props;

  const clickCard = () => cardClicked(countryName);

  return (
    <div className="Card" onClick={clickCard}>
      <img src={flag} alt={countryName} />
      <div>{countryName}</div>
    </div>
  );
}
 
export default Card;