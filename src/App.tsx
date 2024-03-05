import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  //  React Query의 설정과 캐시를 관리
  const queryClient = new QueryClient();
  return (
    //  React Query를 사용하기 위한 컨텍스트 프로바이더
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:id" element={<Home />} />

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
