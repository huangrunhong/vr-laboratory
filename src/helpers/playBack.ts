import { AnimationAction, LoopOnce } from "three";

const playBack = (action: AnimationAction | null, endTimeScale = 1) => {
  if (!action) return;

  action.timeScale = action.time && action.timeScale > 0 ? -1 : 1;

  if (!action.time) {
    action.reset();
    action.warp(0, endTimeScale, 1);
  }

  action.setLoop(LoopOnce, 1);
  action.play();
};

export default playBack;
