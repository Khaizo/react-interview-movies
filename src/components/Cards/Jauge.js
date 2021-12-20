import React, { useState } from "react";
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

const Jauge = ({ likes, dislikes, min = 0, max = 100 }) => {

  // Ratio likes / dislikes en %
  const [value] = useState((likes / (likes + dislikes)) * 100);

  // Setup de l'arc en arrière-plan
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  // Setup de l'arc au premier plan
  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg style={{ overflow: "visible" }}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ]}>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="#9FE855"
        />
      </svg>
    </div>
  )
}
export default Jauge;
