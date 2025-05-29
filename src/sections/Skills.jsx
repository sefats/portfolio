import React from "react";

// Import manuel des logos depuis src/assets/logos/
import Java from "/src/assets/logos/Java.svg";
import Python from "/src/assets/logos/Python.svg";
import C from "/src/assets/logos/C.svg";
import Html from "/src/assets/logos/HTML5.svg";
import Css from "/src/assets/logos/CSS3.svg";
import Javascript from "/src/assets/logos/JavaScript.svg";
import Php from "/src/assets/logos/PHP.svg";
import Kotlin from "/src/assets/logos/Kotlin.svg";
import Swift from "/src/assets/logos/Swift.svg";

import Vue from "/src/assets/logos/Vue.js.svg";
import ReactLogo from "/src/assets/logos/React.svg";
import Vitejs from "/src/assets/logos/Vite.js.svg";
import Symfony from "/src/assets/logos/Symfony.svg";
import Nodejs from "/src/assets/logos/Node.js.svg";
import Spring from "/src/assets/logos/Spring.svg";

import Postgresql from "/src/assets/logos/PostgresSQL.svg";
import Mysql from "/src/assets/logos/MySQL.svg";
import Mongodb from "/src/assets/logos/MongoDB.svg";

import Linux from "/src/assets/logos/Linux.svg";
import Windows from "/src/assets/logos/Windows.svg";
import Github from "/src/assets/logos/GitHub.svg";
import Docker from "/src/assets/logos/Docker.svg";
import Figma from "/src/assets/logos/Figma.svg";
import Canva from "/src/assets/logos/Canva.svg";
import Trello from "/src/assets/logos/Trello.svg";

const skills = {
  "Langages de programmation": [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "C", icon: C },
    { name: "HTML5", icon: Html },
    { name: "CSS3", icon: Css },
    { name: "JavaScript", icon: Javascript },
    { name: "PHP", icon: Php },
    { name: "Kotlin", icon: Kotlin },
    { name: "Swift", icon: Swift },
  ],
  Frameworks: [
    { name: "Vue.js", icon: Vue },
    { name: "React", icon: ReactLogo },
    { name: "Vite.js", icon: Vitejs },
    { name: "Symfony", icon: Symfony },
    { name: "Node.js", icon: Nodejs },
    { name: "Spring", icon: Spring },
  ],
  "Base de données": [
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: Mongodb },
  ],
  "Outils et Applications": [
    { name: "Linux", icon: Linux },
    { name: "Windows", icon: Windows },
    { name: "GitHub", icon: Github },
    { name: "Docker", icon: Docker },
    { name: "Figma", icon: Figma },
    { name: "Trello", icon: Trello },
    { name: "Canva", icon: Canva },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#3B80C3] border-b-4 border-[#3B80C3] inline-block pb-3">
            Compétences
          </h2>
        </div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-3xl font-bold text-[#3B80C3] mb-5">
                {category}
              </h3>
              <div className="bg-gray-100 rounded-2xl px-8 py-6 flex flex-wrap justify-center gap-10">
                {items.map((item, index) => (
                  <div key={index} className="relative group text-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      title={item.name}
                      className="w-14 h-14 transition-transform duration-300 hover:scale-125"
                    />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1f1f1f] 
                    text-white text-sm font-medium rounded-md py-1.5 px-3 opacity-0 group-hover:opacity-100 
                    translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg z-10">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
