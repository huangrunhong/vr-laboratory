import { useRef } from 'react';
import { AnimationAction, LoopOnce } from 'three';

const usePlayOnce = <T extends string>(actions: Record<T, AnimationAction | null>) => {
  const ref = useRef<AnimationAction>(null);

  const playOnce = (name: T, endTimeScale = 1) => {
    const action = actions[name];

    if (!action) return;

    action.clampWhenFinished = true;

    if (ref.current) {
      action.crossFadeFrom(ref.current, 0.5, true);
    }

    action.reset().setEffectiveTimeScale(endTimeScale).setLoop(LoopOnce, 1).play();

    ref.current = action;
  };

  return playOnce;
};

export default usePlayOnce;
