import Projects from "@/components/jp/work/Projects";
import WorkWebDevelopment from "@/components/jp/work/WorkWebDevelopment";
import { WORKTYPES } from "@/data/dataJP";

export default function Page({ params }) {
  return params.workType === "web-development" ? (
    <WorkWebDevelopment />
  ) : (
    <Projects category={params.workType} />
  );
}

export async function generateStaticParams() {
  return WORKTYPES.map((workType) => {
    return {
      workType: workType,
    };
  });
}
