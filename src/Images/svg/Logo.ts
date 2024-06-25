import van from "vanjs-core";

const {rect, svg} = van.tags("http://www.w3.org/2000/svg");

export const Logo = () => svg({width: "100px", viewBox: "0 0 200 200"},
    rect({x: "10", y: "10", width: "50", height: "50", fill: "white"}),
    rect({x: "70", y: "10", width: "50", height: "50", fill: "white"}),
    rect({x: "130", y: "10", width: "50", height: "50", fill: "white"}),
    rect({x: "10", y: "70", width: "50", height: "50", fill: "white"}),
    rect({x: "70", y: "70", width: "50", height: "50", fill: "white"}),
    rect({x: "130", y: "70", width: "50", height: "50", fill: "white"}),
    rect({x: "10", y: "130", width: "50", height: "50", fill: "white"}),
    rect({x: "70", y: "130", width: "50", height: "50", fill: "white"}),
    rect({x: "130", y: "130", width: "50", height: "50", fill: "white"}),
  )