import { DivSeguir, DivUser, LiCard } from "./followersCard.style";

const Followers = ({ foll }: any) => {
  console.log(foll);
  return (
    <LiCard>
      <DivUser>
        <img src={foll.imageUrl} alt={foll.name} />
        <h2>{foll.name}</h2>
      </DivUser>
      <DivSeguir>
        <button>Seuir</button>
      </DivSeguir>
    </LiCard>
  );
};

export default Followers;
