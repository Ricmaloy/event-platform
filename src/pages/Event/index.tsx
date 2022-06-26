import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";
import { useGetLessonsQuery } from "../../graphql/generated";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetLessonsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const path = data?.lessons[0].slug;

    if (!slug && path) {
      navigate(`/event/lesson/${path}`);
    }
  }, [data?.lessons[0].slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
