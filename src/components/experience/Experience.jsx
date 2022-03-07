import React from "react";
import "./experience.css";
import Skills from "./skills/Skills";

const Experience = () => {
  const skills = [
    {
      id: 1,
      skill: "HTML5",
      level: "Learning",
      detail: "주어진 요구 사항에 맞게 원하는 구조를 구축할 수 있습니다.",
    },
    {
      id: 2,
      skill: "CSS3",
      level: "Learning",
      detail: "요구 사항에 맞는 시각적인 표현을 할 수 있습니다.",
    },
    {
      id: 3,
      skill: "SCSS",
      level: "Learning",
      detail:
        "현재 진행 중인 MeetUp 프로젝트와 현재 코드 리팩토링 중인 KH-BOOKS 프로젝트에 활용하여 기술을 익히고 있습니다.",
    },
    {
      id: 4,
      skill: "Bootstrap",
      level: "Experienced",
      detail: "KH-BOOKS 프로젝트에 부분적으로 적용하였습니다.",
    },
    {
      id: 5,
      skill: "JavaScript",
      level: "Learning",
      detail:
        "객체지향 프로그래밍과 함수형 프로그래밍 대해 이해하고 있으며, 동기와 비동기의 차이를 알고있고 꾸주한 공부중에 있습니다.",
    },
    {
      id: 6,
      skill: "React",
      level: "Learning",
      detail:
        "Virtual DOM과 상태관리에 대해 이해하고 있으며 진행중인 프로젝트에 꾸준히 활용하여 실력을 쌓고 있습니다.",
    },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            {skills.map(({ id, skill, level, detail }) => {
              return (
                <div key={id}>
                  <Skills skill={skill} level={level} detail={detail} />
                </div>
              );
            })}
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skills skill="I'm going to study." level="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
