import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SSBPage from "./components/routes/SSBPage";
import MainAssPage from "./components/routes/MainAssPage";
import ErrorPage from "./error-page";
import SSSBPage from "./components/routes/SSSBPage";
import VBSPage from "./components/routes/VBSPage";
import LeadQs from "./components/qs/LeadQs";
import MusicianQs from "./components/qs/MusicianQs";
import VocalistQs from "./components/qs/VocalistQs";
import EngineerQs from "./components/qs/EngineerQs";
import ProducerQs from "./components/qs/ProducerQs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainAssPage />} />
      <Route path="ssb" element={<SSBPage />} />
      <Route path="sssb">
        <SSSBPage />
      </Route>
      <Route path="vbs">
        <VBSPage />
      </Route>
      <Route path="leadQs">
        <LeadQs />
      </Route>
      <Route path="musicianQs">
        <MusicianQs />
      </Route>
      <Route path="vocalistQs">
        <VocalistQs />
      </Route>
      <Route path="EngineerQs">
        <EngineerQs />
      </Route>
      <Route path="ProducerQs">
        <ProducerQs />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
