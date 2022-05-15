import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./styles.scss";

const sample = [
  { category: "A", quantity: Math.random() * 100 },
  { category: "B", quantity: Math.random() * 100 },
  { category: "C", quantity: Math.random() * 100 },
  { category: "D", quantity: Math.random() * 100 },
  { category: "E", quantity: Math.random() * 100 },
  { category: "F", quantity: Math.random() * 100 },
];

const Chart = () => {
  const d3Chart = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const update = useRef(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (update.current) {
        d3.selectAll("g").remove();
      } else {
        update.current = true;
      }
    });
    DrawChart(sample, dimensions);
  }, [dimensions]);

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data, dimensions) {
    const chartwidth = parseInt(d3.select("#Chart").style("width"));
    const chartheight = parseInt(d3.select("#Chart").style("height"));

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.quantity;
    });

    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    svg
      .append("g")
      .attr("fill", "#7ac2e3")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.quantity))
      .attr("height", (d) => y(0) - y(d.quantity))
      .attr("width", x.bandwidth());
  }

  return (
    <div id="Chart">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
