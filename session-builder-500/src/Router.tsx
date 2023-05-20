import { Routes, Route} from "react-router-dom";
import SSBPage from "./components/pages/SSBPage";
import MainAssPage from "./components/pages/MainAssPage";
import ErrorPage from "./error-page";
import SSSBPage from "./components/pages/SSSBPage";
import VBSPage from "./components/pages/VBSPage";
import LeadQs from "./components/qs/LeadQs";
import MusicianQs from "./components/qs/MusicianQs";
import VocalistQs from "./components/qs/VocalistQs";
import EngineerQs from "./components/qs/EngineerQs";
import ProducerQs from "./components/qs/ProducerQs";
import Root from "./components/pages/Root";
import NextSteps from "./components/qs/NextSteps";
import FinalDeetz from "./components/qs/FinalDeetz";
import TrashOrPass from "./components/qs/TrashOrPass";
export default function Router() {
    return (
        <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/main" element={<MainAssPage />} />
        <Route path="/ssb" element={<SSBPage />} />
        <Route path="/sssb" element={<SSSBPage />} />
        <Route path="/vbs" element={<VBSPage />} />
        <Route path="/leadQs" element={<LeadQs />} />
        <Route path="/nextSteps" element={<NextSteps />} />
        <Route path="/musicianQs" element={<MusicianQs />} />
        <Route path="/vocalistQs" element={<VocalistQs />} />
        <Route path="/engineerQs" element={<EngineerQs />} />
        <Route path="/producerQs" element={<ProducerQs />} />
        <Route path="/finalDeetz" element={<FinalDeetz />} />
        <Route path="/trashOrPass" element={<TrashOrPass />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}