interface curtureCardProps {
  text: string;
  imgUrl: string;
}
const CurtureCard: React.FC<curtureCardProps> = ({ text, imgUrl }) => {
  return (
    <div>
      {text}
      {imgUrl}
    </div>
  );
};
export default CurtureCard;
