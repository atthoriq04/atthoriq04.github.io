import links from "../assets/Datas/link.json" assert { type: "json" };
const linksData = JSON.parse(JSON.stringify(links));

function createElement(datas, master) {
  for (let i = 0; i < datas.length; i++) {
    const img = document.createElement("img");
    img.src = "src/assets/" + datas[i]["img"];
    img.alt = datas[i]["name"];
    img.classList.add("p-link");
    const a = document.createElement("a");
    a.href = datas[i]["link"];
    a.target = "_blank";
    a.title = datas[i]["name"];
    a.appendChild(img);
    master.appendChild(a);
  }
}
export { linksData, createElement };
