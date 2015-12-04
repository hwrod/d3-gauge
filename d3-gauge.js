const gaugeCount = 5;
const ul = d3.select("ul");

setInterval(update, 1500);

function update() {

    const li = ul
        .selectAll('li')
        .data(
                Array(gaugeCount).fill().map(() => d3.interpolateRound(0, 100)(Math.random())),
                (d, i) => i
         );

    li
        .enter()
        .append('li');

    li
        .text((d) => `${d}%`)
        .transition()
        .duration(1000)
        .style('background', (d) => `hsl(${d3.interpolateRound(0, 120/100)(d)}, 70%, 50%);`)
        .style('width', (d) => `${d * gaugeCount}px`);

}
