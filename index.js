const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'));

function updateGraph(comb) {
  const nodeObj = Object.fromEntries(
    Array.from(new Set(comb.flat()))
    .map(i => [i, {id: i}])
  );
  const nodes = [...Object.values(nodeObj)];
  const links = comb.map(
    ([k, v]) => ({source: nodeObj[k], target: nodeObj[v]}),
  );
  Graph.graphData({nodes, links});
}

document.querySelector("#btn").addEventListener("click", () => {
  updateGraph(
    document.querySelector("#src").value
    .split("\n")
    .filter(id => id)
    .map(line => line.split(/[ ,]+/))
    .filter(line => line.length == 2)
  );
});

document.querySelector("#src").value =
`1 2
1 3
1 4
2 3
2 4
3 4`;
document.querySelector("#btn").click();
