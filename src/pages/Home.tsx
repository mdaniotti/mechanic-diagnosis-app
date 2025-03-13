import AutoForm from "../components/AutoForm.tsx";
import AutoList from "../components/AutoList.tsx";

const Home: React.FC = () => {
  return (
    <div className="container p-5">
      <AutoForm />
      <AutoList />
    </div>
  );
};

export default Home;
