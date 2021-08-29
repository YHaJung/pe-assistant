import {poseSimilarity} from './pose-similarity.js'
import TestPose from './testpose.json'

export default function estimateAction(pose) {
  
  var flag = 1;
  var pose1 = TestPose[0];
  var pose2 = pose;

  console.log(poseSimilarity(pose1, pose2));
}
