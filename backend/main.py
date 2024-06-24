from fastapi import FastAPI, Form
from pydantic import BaseModel
from networkx import DiGraph, is_directed_acyclic_graph
# from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()



from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Position(BaseModel):
    x: float
    y: float

class NodeData(BaseModel):
    id: str
    nodeName: str
    nodeType: str

class Node(BaseModel):
    id: str
    type: str
    position: Position
    data: NodeData
    dragging: Optional[bool] = None
    height: float
    selected: Optional[bool] = None
    width: float
    
class EdgeMarker(BaseModel):
    type: str
    height: str
    width: str

class Edge(BaseModel):
    source: str
    sourceHandle: str
    target: str
    targetHandle: str
    type: str
    animated: bool
    id: str
    markerEnd: EdgeMarker

class Pipeline(BaseModel):
    nodes: List[Node] = []
    edges: List[Edge] = []
origins = [
    "http://localhost:3000"
]

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    Graph = DiGraph()
    node_ids = {node.id for node in nodes}
    Graph.add_nodes_from(node_ids)
    
    for edge in edges:
        Graph.add_edge(edge.source, edge.target)
    return is_directed_acyclic_graph(Graph)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    try:
        nodes_size = len(pipeline.nodes)
        edges_size = len(pipeline.edges)
        is_a_dag = is_dag(pipeline.nodes, pipeline.edges)
    # print("NODE", pipeline.nodes)
    # print("EDGES", pipeline.edges)
        return {"num_nodes": nodes_size, "num_edges": edges_size, "is_dag": is_a_dag}
    except Exception as e:
        print("Something went worng", str(e))
        raise HTTPException(status_code=422, detail="Invalid data")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )