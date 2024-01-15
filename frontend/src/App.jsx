import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient();

function App() {
  const fetchDrop = async () => {
    const response = await axiosClient.get(`/`);
    console.log(response.data.data);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
