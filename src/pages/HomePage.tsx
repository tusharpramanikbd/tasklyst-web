import Typography from "../components/Primitives/Typography";
import ViewWrapper from "../components/Primitives/ViewWrapper";
// import { DBProvider } from "../contexts/DBContext";

const HomePage = () => {
  return (
    // <DBProvider>
    <ViewWrapper className="p-6">
      <Typography type="xxlarge">Tasklyst</Typography>
      <Typography>Web version starting...</Typography>
    </ViewWrapper>
    // </DBProvider>
  );
};

export default HomePage;
