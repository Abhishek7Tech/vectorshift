import { Position } from "reactflow"

export const setHandlePositions = (handlePosition) => {
        if(handlePosition === 'right') {
            return Position.Right;
        }

        if(handlePosition === 'left') {
            return Position.Left;
        }

        if(handlePosition === 'top') {
            return Position.Top;
        }

        if(handlePosition === 'bottom') {
            return Position.Bottom;
        }

        return Position.Right;
}