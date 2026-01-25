import { AnimationAction, LoopOnce } from 'three';

const playOnce = (action: AnimationAction | null, endTimeScale = 1) => {
  if (!action) return;

  action.clampWhenFinished = true;

  action.reset().setEffectiveTimeScale(endTimeScale).setLoop(LoopOnce, 1).play();
};

export default playOnce;
