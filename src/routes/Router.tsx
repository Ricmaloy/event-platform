import { Route, Routes } from "react-router-dom";
import { Calendar } from "../pages/Calendar";
import { Checkpoints } from "../pages/Checkpoints";
import { Event } from "../pages/Event";
import { Subscribe } from "../pages/Subscribe";

export function Router() {
    return (
        <Routes>
          <Route path="/" element={<Subscribe />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/lesson/:slug" element={<Event />} />
          <Route path="/event/cronograma" element={<Calendar />} />
          <Route path="/event/desafios/checkpoints" element={<Checkpoints />} />
        </Routes>
    )
}
