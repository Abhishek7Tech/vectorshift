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
  textInputState: [],
  dropDownLabel: [],
  dropDownOptions: [],
  handleOptions: [],
  nodeData: [],

  


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
  setAddHandler: () => set({ addHandle: true }),
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
  setFormState: (...input) => {
    set({
      formState: [...get().formState, input]
    })
  },
  setTextInputState: (input) => {
    set({
      textInputState: [...input]
    })
  },
  setDropDownLabel: (e) => {

    const dropDownId = e.target.id;
    const value = e.target.value;
    const dropDown = get().dropDownLabel.filter((dropDown) => dropDown.id === dropDownId);
    if (dropDown.length < 1) {
      set({ dropDownLabel: [...get().dropDownLabel, { id: dropDownId, label: value }] })
      return;
    }
    const updatedDropDownLabel = get().dropDownLabel.map((dropDown) => dropDown.id === dropDownId ? { id: dropDownId, label: value } : dropDown);

    set({
      dropDownLabel: updatedDropDownLabel
    })
  },

  setDropDownOptions: (e) => {
    const dropDownOptionsId = e.target.id;
    const value = e.target.value;
    //lable id
    const dropDownId = e.target.name;
    console.log("D", dropDownOptionsId)
    const labelName = get().dropDownLabel.filter((label) => label.id === dropDownId);
    const dropDownInput = get().dropDownOptions.filter((dropDownInput) => dropDownInput.id === dropDownOptionsId);
    if (dropDownInput.length < 1) {
      set({ dropDownOptions: [...get().dropDownOptions, { labelId: dropDownId, id: dropDownOptionsId, dropDownLabel: value, type: "dropdown", forLabel: labelName[0].label }] })
      return;
    }
    const updatedDropDownOptions = get().dropDownOptions.map((dropDownInput) => dropDownInput.id === dropDownOptionsId ? { labelId: dropDownId, id: dropDownOptionsId, dropDownLabel: value, type: "dropdown", forLabel: labelName[0].label } : dropDownInput);
    set({ dropDownOptions: [...updatedDropDownOptions] });
  },

  gethandleOptions: (handles) => {
    set({handleOptions: handles})
  },
  setNodeData : (data) => {
    set({nodeData: [...get().nodeData,...data]})
  },



}));
