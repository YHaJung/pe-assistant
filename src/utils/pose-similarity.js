import { Pose, Options } from './types.ts';
import { vectorizeAndNormalize } from './vectorizeAndNormalize.js';
import { cosineSimilarity, cosineDistanceMatching, weightedDistanceMatching } from './strategies.js';

export function poseSimilarity(pose1, pose2, overridenOptions){

  // merge options
  const defaultOptions= {
    strategy: 'weightedDistance'
  };
  const options = Object.assign({}, defaultOptions, overridenOptions);

  let [vectorPose1XY, vectorPose1Scores] = vectorizeAndNormalize(pose1, options);
  let [vectorPose2XY] = vectorizeAndNormalize(pose2, options);

  // execute strategy
  // if strategy is given by the string form
  if (typeof options.strategy === 'string') {
    switch(options.strategy) {
      case 'cosineSimilarity':
        return cosineSimilarity(vectorPose1XY, vectorPose2XY);
      case 'cosineDistance':
        return cosineDistanceMatching(vectorPose1XY, vectorPose2XY);
      case 'weightedDistance':
        return weightedDistanceMatching(vectorPose1XY, vectorPose2XY, vectorPose1Scores);
      default:
        throw new Error(`[Bad strategy option] It should be either 'cosineSimilarity', 'cosineDistance' or 'weightedDistance' (default).`);
    }
  // if strategy is given by a custom function
  } else if (typeof options.strategy === 'function') {
    return options.strategy(vectorPose1XY, vectorPose2XY, vectorPose1Scores);
  } else {
    throw new TypeError(`[Bad strategy option] It only accepts string or function types of values.`)
  }
}

//export { vectorizeAndNormalize } from './libs/vectorizeAndNormalize';
//export { cosineSimilarity, cosineDistanceMatching, weightedDistanceMatching } from './libs/strategies';