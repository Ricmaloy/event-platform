import { Lesson } from "../Lesson";
import { useParams } from "react-router-dom";
import { useGetLessonsQuery } from "../../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { slug } = useParams<{ slug: string }>();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 h-[calc(100vh_-_83px)] overflow-auto">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              isActive={slug === lesson.slug}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
