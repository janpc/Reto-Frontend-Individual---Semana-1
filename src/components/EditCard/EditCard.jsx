import { Background, Card } from './style';

export default function EditCard({ children, closeForm }) {
  const handleClose = (e) => {
    if (e.target.id === 'background') {
      closeForm();
    }
  };
  return (
    <Background onClick={handleClose} id="background">
      <Card>{children}</Card>
    </Background>
  );
}
