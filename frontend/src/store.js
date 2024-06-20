// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  form: false,
  addInput: false,
  inputs: 1,
  handles: 1,
  addHandle: false,
  formState: [],
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node]
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge({ ...connection, type: 'smoothstep', animated: true, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' } }, get().edges),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
  showForm: () => set({ form: true }),
  hideForm: () => set({ form: false }),
  setAddInput: () => set({ addInput: true }),
  setAddHandler: () => set({addHandle: true}),
  increaseInputs: () => {
    if (get().inputs < 3) {
      set({ inputs: get().inputs + 1 })
    }
  },
  decreaseInputs: () => {
    if (get().inputs > 1) {
      set({ inputs: get().inputs - 1 })
    }
  },
  increaseHandles: () => {
    if (get().handles < 3) {
      set({ handles: get().handles + 1 })
    }
  },
  decreaseHandles: () => {
    if (get().handles > 1) {
      set({ handles: get().handles - 1 })
    }
  },
  setFormState: (input) => {
    set({
      formState: [...get().formState,input]
    })
  }


}));
