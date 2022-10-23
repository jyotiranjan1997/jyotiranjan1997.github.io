
import React from "react";
import "./Github.css";


export default function Github(){



    return (
      <div className="Github" >
        <div  className="Github-prfl" >
          <a href="http://www.github.com/jyotiranjan1997">
            <img
              src="https://github-readme-stats.vercel.app/api?username=jyotiranjan1997&show_icons=true&hide=&count_private=true&title_color=f97316&text_color=ffffff&icon_color=84cc16&bg_color=1c1917&hide_border=true&show_icons=true"
              alt="jyotiranjan1997's GitHub stats"
            />
          </a>

          <a href="http://www.github.com/jyotiranjan1997">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=jyotiranjan1997&stroke=ffffff&background=1c1917&ring=f97316&fire=f97316&currStreakNum=ffffff&currStreakLabel=f97316&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" />
          </a>
        </div>
        <div  className="git-status"  >
          <a href="http://www.github.com/jyotiranjan1997">
            <img
              src="https://activity-graph.herokuapp.com/graph?username=jyotiranjan1997&bg_color=1c1917&color=ffffff&line=84cc16&point=ffffff&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph"
              alt="GitHub Commits Graph"
            />
          </a>
        </div>
      </div>
    );
}