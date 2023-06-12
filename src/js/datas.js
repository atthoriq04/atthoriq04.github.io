import works from "../assets/Datas/works.json" assert { type: "json" };

const worksData = JSON.parse(JSON.stringify(works));

function createWorksElem(datas, master) {
  for (let i = 0; i < datas.length; i++) {
    const img = document.createElement("img");
    img.src = "src/assets/" + datas[i]["img"];
    img.alt = datas[i]["project-title"];
    const a = document.createElement("a");
    a.href = datas[i]["link"];
    a.target = "_blank";
    a.appendChild(img);
    const h3 = document.createElement("h3");
    const title = document.createTextNode(datas[i]["project-title"]);
    h3.appendChild(title);
    const divTitle = document.createElement("div");
    divTitle.classList.add("project-tile");
    const divProject = document.createElement("div");
    divProject.classList.add("project");
    const divCanvas = document.createElement("div");
    divCanvas.classList.add("canvas");
    divCanvas.classList.add("flex");
    const divOuter = document.createElement("div");
    divOuter.classList.add("projects-showcase");
    divTitle.appendChild(h3);
    divProject.appendChild(a);
    divCanvas.appendChild(divTitle);
    divCanvas.appendChild(divProject);
    divOuter.appendChild(divCanvas);
    master.appendChild(divOuter);
  }
}
export { worksData, createWorksElem };
