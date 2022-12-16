type CardProps = {
  title: string;
  description: string;
  image: string;
  id: number;
  setOpenId: (id: number) => void;
  isOpen: boolean;
};

export default function Card({ title, description, image, id, setOpenId, isOpen }: CardProps) {
  return (
    <div className={`card ${isOpen ? "card-anim" : ""}`} onClick={() => setOpenId(id)}>
      {title}
      {description}
    </div>
  );
}
